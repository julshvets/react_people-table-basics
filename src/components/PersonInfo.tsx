import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Person } from '../types';
import { PersonLink } from './PersonLink';

interface Props {
  key: string;
  person: Person;
  mother: Person | null;
  father: Person | null;
}

export const PersonInfo: React.FC <Props> = ({
  key,
  person,
  mother,
  father,
}) => {
  const {
    name,
    sex,
    born,
    died,
    fatherName = '-',
    motherName = '-',
    slug,
  } = person;

  const { slectedPersonSlug = '' } = useParams();

  const isSelected = (personSlug: string) => personSlug === slectedPersonSlug;

  return (
    <tr
      key={key}
      data-cy="person"
      className={classNames({
        'has-background-warning': isSelected(slug),
      })}
    >
      <td>
        <PersonLink
          slug={slug}
          name={name}
          sex={sex}
        />
      </td>

      <td>{sex}</td>
      <td>{born}</td>
      <td>{died}</td>

      <td>
        <PersonLink
          slug={mother?.slug || null}
          name={motherName}
          sex={mother?.sex || null}
        />
      </td>

      <td>
        <PersonLink
          slug={father?.slug || null}
          name={fatherName}
          sex={father?.sex || null}
        />
      </td>
    </tr>
  );
};

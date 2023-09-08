import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const icons=[<FaRegThumbsUp/>,<MdPeople/>,<MdOutlineProductionQuantityLimits/>,<GiTreeDoor/>]

export const Statistics = ({ title, stats }) => {

  return (
    <>
      {title && <StatisticTitle>Main Statistics</StatisticTitle>}

      <StatisticsList>
        {stats.map((item, i) => {
          return (
            <StatisticItem
              key={item.id}
              title={item.title}
              total={item.total}
              icon={icons[i]}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};

import { ReactComponent as Pen } from '../../assets/icons/pen.svg';
import { ReactComponent as Add } from '../../assets/icons/add.svg';
import { ReactComponent as NoImage } from '../../assets/icons/noImage.svg';
import { ReactComponent as Filter } from '../../assets/icons/filter.svg';

const getSvg = (name: string) => {
  let Svg = <></>;
  switch (name) {
    case 'pen':
      Svg = <Pen />;
      break;
    case 'add':
      Svg = <Add />;
      break;
    case 'noImage':
      Svg = <NoImage />;
      break;
    case 'filter':
      Svg = <Filter />;
      break;
  }
  return Svg;
};

export default getSvg;

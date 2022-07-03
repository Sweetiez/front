import { ReactComponent as Pen } from '../../assets/icons/pen.svg';
import { ReactComponent as Add } from '../../assets/icons/add.svg';
import { ReactComponent as NoImage } from '../../assets/icons/noImage.svg';
import { ReactComponent as Filter } from '../../assets/icons/filter.svg';
import { ReactComponent as Eye } from '../../assets/icons/eye.svg';

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
    case 'eye':
      Svg = <Eye />;
      break;
  }
  return Svg;
};

export default getSvg;

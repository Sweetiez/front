import { ReactComponent as Pen } from '../../assets/icons/pen.svg';
import { ReactComponent as Add } from '../../assets/icons/add.svg';
import { ReactComponent as NoImage } from '../../assets/icons/noImage.svg';

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
  }
  return Svg;
};

export default getSvg;

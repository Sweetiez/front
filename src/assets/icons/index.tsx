
import {ReactComponent as Pen} from '../../assets/icons/pen.svg'
import {ReactComponent as Add} from '../../assets/icons/add.svg'

const getSvg = (name: string) => {
    let Svg =<></>
    switch (name) {
        case "pen":
            Svg = <Pen />;
            break;
        case "add":
            Svg = <Add />;
            break;

    }
    return Svg;

}

export default getSvg
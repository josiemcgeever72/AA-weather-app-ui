import { shallow }          from 'enzyme';
import { LabelValueRow }    from './LabelValueRow';

describe('LableValueRow Component', () => {

    const artibaryLabel:string = 'anyLabel';
    const artibaryValue:string = 'anyValue';

    it('renders without crashing', () =>{
        expect(shallow(<LabelValueRow label={artibaryLabel} value={artibaryValue}/>));
    });

    it('renders a label element containing the labelParm,a div tag containing the valueParm & no img element', () =>{
        const wrapper =shallow(<LabelValueRow label={artibaryLabel} value={artibaryValue}/>);
        expect(wrapper.find('label').length).toBe(1);
        expect(wrapper.find('label').first().contains(artibaryLabel)).toBe(true);
        expect(wrapper.find('div.col-sm-8').first().contains(artibaryValue)).toBe(true);
        expect(wrapper.find('img').length).toBe(0);
    });

    it('renders a img element when imgUrl is included, ', () =>{
        const wrapper =shallow(<LabelValueRow label={artibaryLabel} value={artibaryValue} imgUrl="arbitaryImrUrl"/>);
        expect(wrapper.find('img').length).toBe(1);
    });
});
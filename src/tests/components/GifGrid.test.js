import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'one puch';
    

    test('El componente debe de mostrarse correctamente ', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect( wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar items cuando se cargan imagenes', () => {
        const gifs = [
        {
            id: '131313',
            title: 'Dragon ball',
            url: 'http://dragonball.com/heroes/goku.png'
        },
        {
            id: '131313',
            title: 'Dragon ball',
            url: 'http://dragonball.com/heroes/goku.png'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        //expect( wrapper ).toMatchSnapshot();
        //cuando se cargan las imagenes, debe desaparecer el elemento p,
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
        

    });


});

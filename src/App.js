// import logo from './logo.svg';
import './App.css';
// import shortid from 'shortid'
import { nanoid } from 'nanoid';
import Rates from "./components/Rates";
import Search from "./components/Search";
import Widgets from "./components/Widgets";
import Banner from "./components/Banner";
import News from "./components/News";
import * as data from "./data/data";
import Widget from "./components/Widget";

function App() {
  const titleNews = ['Сейчас в СМИ', 'В Германии', 'Рекомендуем'];
  const news = [
    {
      titleList: 'Сейчас в СМИ',
      link: 'https://yandex.ru/news/story/Prezident_Putin_zayavil_chto_osnovanij_dlyaizmeneniya_pozicii_Evropy_pootnosheniyu_kRF_net--35141bb9591d3c15fa5b42e9eef1fa84?lang=ru&from=main_portal&fan=1&stid=rb56r8khdcjY7X5oTUzn&t=1650464426&persistent_id=193360286&story=3761a765-6988-5dc2-ae32-b1d0ceb50496&lr=101432&msid=1650464930976179-6235119007805024399-vla1-3880-vla-l7-balancer-8080-BAL-6427&mlid=1650464426.glob_225.35141bb9&utm_medium=topnews_news&utm_source=morda_desktop',
      img: 'https://www.lexisrex.com/gadgets/lafc/weather/smalljpg202347875.jpg',
      description: 'риа',
      id: nanoid(),
      text: 'Президент Путин заявил, что оснований для изменения позиции Европы по отношению к РФ нет'
    },
    {
      titleList: 'В Германии',
      link: 'https://yandex.ru/news/story/Prezident_Putin_podderzhal_ideyu_sispolneniem_gimna_i_podnyatiem_flaga_vshkolakh_Rossii--83bf73ec97e30e0fbc6cf13410327e05?lang=ru&from=main_portal&fan=1&stid=lT0lGlME0nkaS6EjWpfP&t=1650464426&persistent_id=193020758&story=0c544fed-d4bf-5be4-90a3-e045609045c1&lr=101432&msid=1650464930976179-6235119007805024399-vla1-3880-vla-l7-balancer-8080-BAL-6427&mlid=1650464426.glob_225.83bf73ec&utm_medium=topnews_news&utm_source=morda_desktop',
      img: 'http://cdn.novostinauki.ru/2018_06_21/31_100x100.stormlapse-01.885.jpg',
      description: 'газета.ру',
      id: nanoid(),
      text: 'Пресс-секретарь Путина Песков заявил о передаче Украине документа'
    },
    {
      titleList: 'Сейчас в СМИ',
      link: 'https://yandex.ru/news/story/Prezident_Putin_podderzhal_ideyu_sispolneniem_gimna_i_podnyatiem_flaga_vshkolakh_Rossii--83bf73ec97e30e0fbc6cf13410327e05?lang=ru&from=main_portal&fan=1&stid=lT0lGlME0nkaS6EjWpfP&t=1650464426&persistent_id=193020758&story=0c544fed-d4bf-5be4-90a3-e045609045c1&lr=101432&msid=1650464930976179-6235119007805024399-vla1-3880-vla-l7-balancer-8080-BAL-6427&mlid=1650464426.glob_225.83bf73ec&utm_medium=topnews_news&utm_source=morda_desktop',
      img: 'http://cdn.novostinauki.ru/2018_06_21/31_100x100.stormlapse-01.885.jpg',
      description: 'газета.ру',
      id: nanoid(),
      text: 'Пресс-секретарь Путина Песков заявил о передаче Украине документа'
    },
    {
      titleList: 'В Германии',
      link: 'https://yandex.ru/news/story/Prezident_Putin_podderzhal_ideyu_sispolneniem_gimna_i_podnyatiem_flaga_vshkolakh_Rossii--83bf73ec97e30e0fbc6cf13410327e05?lang=ru&from=main_portal&fan=1&stid=lT0lGlME0nkaS6EjWpfP&t=1650464426&persistent_id=193020758&story=0c544fed-d4bf-5be4-90a3-e045609045c1&lr=101432&msid=1650464930976179-6235119007805024399-vla1-3880-vla-l7-balancer-8080-BAL-6427&mlid=1650464426.glob_225.83bf73ec&utm_medium=topnews_news&utm_source=morda_desktop',
      img: 'http://cdn.novostinauki.ru/2018_06_21/31_100x100.stormlapse-01.885.jpg',
      description: 'газета.ру',
      id: nanoid(),
      text: 'Пресс-секретарь Путина Песков заявил о передаче Украине документа'
    },
    {
      titleList: 'Сейчас в СМИ',
      link: 'https://yandex.ru/news/story/Prezident_Putin_podderzhal_ideyu_sispolneniem_gimna_i_podnyatiem_flaga_vshkolakh_Rossii--83bf73ec97e30e0fbc6cf13410327e05?lang=ru&from=main_portal&fan=1&stid=lT0lGlME0nkaS6EjWpfP&t=1650464426&persistent_id=193020758&story=0c544fed-d4bf-5be4-90a3-e045609045c1&lr=101432&msid=1650464930976179-6235119007805024399-vla1-3880-vla-l7-balancer-8080-BAL-6427&mlid=1650464426.glob_225.83bf73ec&utm_medium=topnews_news&utm_source=morda_desktop',
      img: 'http://cdn.novostinauki.ru/2018_06_21/31_100x100.stormlapse-01.885.jpg',
      description: 'газета.ру',
      id: nanoid(),
      text: 'Пресс-секретарь Путина Песков заявил о передаче Украине документа'
    },
  ]



  const dayLink =
  {
    link: 'https://yandex.ru/search/?lr=101432&text=%D0%B3%D0%B4%D0%B5+%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C+%D0%B4%D0%BE%D0%BB%D0%BB%D0%B0%D1%80%D1%8B+%D0%B2+%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B5&src=suggest_B',
    title: 'где купить доллары в москве',
  }

  //console.log('дата', new Date(Date.now()).toLocaleString());

  return (
    <div className='container'>
      <div className='container2'>
        <News listTitle={titleNews} listNews={news} />
        <Widget widget={{ widgetName: "Работа над ошибками", widgetBody: [{ id: nanoid(), img: '/', describe: "Смотрите на Яндексе и запоминайте" }] }} />
      </div>
      <Rates rates={data.rates} />
      <Search titles={data.searchTitles} dayLink={dayLink} />
      <Banner />
      <Widgets items={data.widgetsItems} />
    </div>
  );
}

export default App;
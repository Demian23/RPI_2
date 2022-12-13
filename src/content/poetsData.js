import KondratKrapivaMain from "../images/KondratKrapiva/KondratKrapivaMain.jpg";
import KondratKrapiva1 from "../images/KondratKrapiva/KondratKrapiva1.jpg";
import KondratKrapiva2 from "../images/KondratKrapiva/KondratKrapiva2.jpg";
import KondratKrapiva3 from "../images/KondratKrapiva/KondratKrapiva3.jpg";
import KondratKrapiva4 from "../images/KondratKrapiva/KondratKrapiva4.jpg";
import KondratKrapiva5 from "../images/KondratKrapiva/KondratKrapiva5.jpg";

import MaksimTankMain from "../images/MaksimTank/MaksimTankMain.jpg";
import MaksimTank1 from "../images/MaksimTank/MaksimTank1.jpg";
import MaksimTank2 from "../images/MaksimTank/MaksimTank2.jpg";
import MaksimTank3 from "../images/MaksimTank/MaksimTank3.jpg";
import MaksimTank4 from "../images/MaksimTank/MaksimTank4.jpg";
import MaksimTank5 from "../images/MaksimTank/MaksimTank5.jpg";

import PetrBrovkaMain from "../images/PetrBrovka/PetrBrovkaMain.jpg";
import PetrBrovka1 from "../images/PetrBrovka/PetrBrovka1.jpg";
import PetrBrovka2 from "../images/PetrBrovka/PetrBrovka2.jpg";
import PetrBrovka3 from "../images/PetrBrovka/PetrBrovka3.jpg";
import PetrBrovka4 from "../images/PetrBrovka/PetrBrovka4.jpg";
import PetrBrovka5 from "../images/PetrBrovka/PetrBrovka5.jpg";

import YakubKolasMain from "../images/YakubKolas/YakubKolasMain.jpg";
import YakubKolas1 from "../images/YakubKolas/YakubKolas1.jpg";
import YakubKolas2 from "../images/YakubKolas/YakubKolas2.jpg";
import YakubKolas3 from "../images/YakubKolas/YakubKolas3.jpg";
import YakubKolas4 from "../images/YakubKolas/YakubKolas4.jpg";
import YakubKolas5 from "../images/YakubKolas/YakubKolas5.jpg";

import YankaKupalaMain from "../images/YankaKupala/YankaKupalaMain.jpg";
import YankaKupala1 from "../images/YankaKupala/YankaKupala1.jpg";
import YankaKupala2 from "../images/YankaKupala/YankaKupala2.jpg";
import YankaKupala3 from "../images/YankaKupala/YankaKupala3.jpg";
import YankaKupala4 from "../images/YankaKupala/YankaKupala4.jpg";
import YankaKupala5 from "../images/YankaKupala/YankaKupala5.jpg";

const poetsData = [
    {
        id: 1,
        mainPhoto: KondratKrapivaMain,
        fullName: "Кондрат Крапива",
        nameEng: "Kondrat Krapiva",
        birthDate: "22 февраля 1896",
        deathDate: "7 января 1991",
        description:  "Белорусский советский писатель, поэт, драматург и переводчик, литературовед, сатирик, общественный деятель. " +
            "Доктор филологических наук, академик АН Белорусской ССР (1950). Член ВКП(б) с 1941 года. Герой Социалистического Труда (1975). " +
            "Народный писатель Белорусской ССР (1956). Лауреат двух Сталинских премий (1941, 1951) и Государственной премии СССР (1971).",
        photos: [
            KondratKrapiva1,
            KondratKrapiva2,
            KondratKrapiva3,
            KondratKrapiva4,
            KondratKrapiva5,
        ],
        videos: [
            "https://www.youtube.com/embed/7iXF_TvojAc",
            "https://www.youtube.com/embed/BjxiKxV32_w",
            "https://www.youtube.com/embed/GNAg_RsitF0",
        ],
        coords: {
            lng: 27.60454905668736,
            ltd: 53.917654126609094
        },
        place: "Институт Искусствоведения, Этнографии И Фольклора Им к. Крапивы",
        url: "/KondratKrapiva"
    },
    {
        id: 2,
        mainPhoto: MaksimTankMain,
        fullName: "Максим Танк",
        nameEng: "Maxim Tank",
        birthDate: "4 сентября 1912",
        deathDate: "7 августа 1995",
        description: "Белорусский советский поэт, переводчик, государственный деятель. Народный поэт Белорусской ССР (1968). Герой Социалистического Труда (1974). " +
            "Лауреат Ленинской (1978) и Сталинской премии второй степени (1948). Лауреат Государственной премии Белорусской ССР имени Янки Купалы (1966). " +
            "Академик АН Белорусской ССР (1972). Член КПЗБ с 1936 года. Председатель Верховного Совета Белорусской ССР (1965—1971)",
        photos: [
            MaksimTank1,
            MaksimTank2,
            MaksimTank3,
            MaksimTank4,
            MaksimTank5,
        ],
        videos: [
            "https://www.youtube.com/embed/lvecTq6EmDo",
            "https://www.youtube.com/embed/hsAADM21bx8",
            "https://www.youtube.com/embed/3Rt8eu_sdN0",
            "https://www.youtube.com/embed/r3wv8iQ8XwA",
        ],
        coords: {
            lng: 27.5445297,
            ltd: 53.89508991852648
        },
        place: "Белорусский государственный педагогический университет имени Максима Танка",
        url: "/MaksimTank"
    },
    {
        id: 3,
        mainPhoto: PetrBrovkaMain,
        fullName: "Пётр Бровка",
        nameEng: "Petr Brovka",
        birthDate: "12 июня 1905",
        deathDate: "24 марта 1980",
        description:
            "Белорусский советский писатель, поэт и переводчик, драматург, публицист. Народный поэт Белорусской ССР (1962). Герой Социалистического Труда (1972)." +
            " Академик АН БССР (1966). Лауреат Ленинской (1962) и двух Сталинских премий (1947, 1951). Депутат ВС СССР с 1956 года. Член ВКП(б) с 1940 года.",
        photos: [
            PetrBrovka1,
            PetrBrovka2,
            PetrBrovka3,
            PetrBrovka4,
            PetrBrovka5,
        ],
        videos: [
            "https://www.youtube.com/embed/OY3h2SBjqoU",
            "https://www.youtube.com/embed/rqlwySC-mlw",
            "https://www.youtube.com/embed/LozL_I6RlxA",
            "https://www.youtube.com/embed/EEqUgz5hXoM",
        ],
        coords: {
            lng: 27.5608658,
            ltd: 53.89967161620876
        },
        place: "Литературный музей Петруся Бровки",
        url: "/PetrBrovka"
    },
    {
        id: 4,
        mainPhoto: YakubKolasMain,
        fullName: "Якуб Колас",
        nameEng: "Yakub Kolas",
        birthDate: "22 октября 1882",
        deathDate: "13 августа 1956",
        description: "Белорусский писатель, драматург, поэт и переводчик, общественный деятель. Один из классиков и основоположников новой белорусской литературы. " +
            "Народный поэт Белорусской ССР (1926). Академик АН Белорусской ССР (1928). Член СП СССР (1934). " +
            "Заслуженный деятель науки Белорусской ССР (1944). Член ВКП(б) с 1945 года.",
        photos: [
            YakubKolas1,
            YakubKolas2,
            YakubKolas3,
            YakubKolas4,
            YakubKolas5,
        ],
        videos: [
            "https://www.youtube.com/embed/GNAg_RsitF0",
            "https://www.youtube.com/embed/GNAg_RsitF0",
            "https://www.youtube.com/embed/GNAg_RsitF0",
            "https://www.youtube.com/embed/GNAg_RsitF0",
        ],
        coords: {
            lng: 27.58235565139815,
            ltd: 53.91586630602633
        },
        place: "Площадь Якуба Коласа",
        url: "/YakubKolas"
    },
    {
        id: 5,
        mainPhoto: YankaKupalaMain,
        fullName: "Янка Купала",
        nameEng: "Yanka Kupala",
        birthDate: 	"22 февраля 1896",
        deathDate: "7 января 1991",
        description:  "Настоящее имя Иван Доминикович Луцевич. Белорусский советский поэт и переводчик, драматург, публицист. Известен под впсевдонимами:" +
            " Адзін з «парнаснікаў»; Вайдэльота; Здарэнец; Левы; Марка Бяздольны; Ня-Гутнік; Стары Мінчук; Янук з-пад Менска.",
        photos: [
            YankaKupala1,
            YankaKupala2,
            YankaKupala3,
            YankaKupala4,
            YankaKupala5,
        ],
        videos: [
            "https://www.youtube.com/embed/JHgphHjmc-Q",
            "https://www.youtube.com/embed/9FZehV2qJTk",
            "https://www.youtube.com/embed/9mUbiD8jiJo",
            "https://www.youtube.com/embed/iauIqr1_Yn0",
        ],
        coords: {
            lng: 27.562890061378276,
            ltd: 53.90134419807047
        },
        place: "Театр имени Янки Купалы",
        url: "/YankaKupala"
    },
];

export default poetsData;
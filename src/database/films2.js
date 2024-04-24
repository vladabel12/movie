import parisMiniImage from "/src/assets/img/Paris-mini.png";
import moonfallMiniImage from "/src/assets/img/Moonfall-mini.png";
import tokyoMiniImage from "/src/assets/img/Tokyo-mini.png";
import gucciMiniImage from "/src/assets/img/gucci-mini.png";
import gucciBigImage from "/src/assets/img/gucci-big.jpg";
import tokyoBigImage from "/src/assets/img/Tokyo-big.png";
import moonfallBigImage from "/src/assets/img/Moonfall-big.png";
import parisBigImage from "/src/assets/img/Paris-big.png";
import HeartSvg from "/src/assets/icons/heart.svg";
import Heart1Svg from "/src/assets/icons/heart-1.svg";
export const films2 = [
    {
        id: 1,
        title: "Tokyo Train",
        image: tokyoMiniImage,
        year: "2022",
        genre: "Action comedy",
        isFavorited: true,
        heartIcon: Heart1Svg,
        description: "Tokyo Train is a hilarious action-packed comedy set in the heart of Tokyo's bustling train stations. Follow the misadventures of two unlikely companions as they navigate the chaotic world of Japanese commuter trains.",
        time: "2h 38m",
        bigImage: tokyoBigImage,
        mark: "7.8/10",
    },
    {
        id: 2,
        title: "Moonfall Again",
        image: moonfallMiniImage,
        year: "2022",
        genre: "Sci-fi",
        isFavorited: true,
        heartIcon: Heart1Svg,
        description: "In Moonfall Again, Earth faces another catastrophic threat as the moon, thought to be destroyed, reappears and hurtles towards the planet. Humanity's survival hangs in the balance as a team of brave astronauts embark on a mission to save the world.",
        time: "2h 38m",
        bigImage: moonfallBigImage,
        mark: "7.8/10",
    },
    {
        id: 3,
        title: "Life in Paris",
        image: parisMiniImage,
        year: "2020",
        genre: "Comedy drama",
        isFavorited: true,
        heartIcon: HeartSvg,
        description: "Life in Paris is a heartwarming comedy-drama that follows the lives of diverse characters living in the enchanting city of Paris. Through laughter and tears, they discover love, friendship, and the true meaning of happiness.",
        time: "2h 38m",
        bigImage: parisBigImage,
        mark: "7.8/10",
    },
    {
        id: 4,
        title: "House of Gucci",
        image: gucciMiniImage,
        year: "2021",
        genre: "Drama",
        isFavorited: true,
        heartIcon: HeartSvg,
        description: "House of Gucci delves into the captivating story of the iconic Gucci fashion empire and the tumultuous events that unfolded within the Gucci family. From love and betrayal to power struggles, this gripping drama reveals the darker side of high fashion.",
        time: "2h 38m",
        bigImage: gucciBigImage,
        mark: "7.8/10",
    },
];

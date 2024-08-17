import './MyCity.css';

export default function MyCity(props) {
    return (
        <div>
            <h1>Назва міста:{props.name}</h1>
            <h2>Країна:{props.country}</h2>
            <h2>Рік заснування:{props.year}</h2>

            <div class = 'photo-container'>
                <img src={props.photo1} alt='none' />
                <img src={props.photo2} alt='none' />
                <img src={props.photo3} alt='none' />
            </div>


        </div>

    );
}
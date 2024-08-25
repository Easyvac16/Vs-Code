// let PIB = 'Grigoriev Dmytro Igorovich';
// let phone = '380688301023';
// let gmail = 'gdima9051@gmail.com';

export default function Resume(props) {

    return (
        <div>
            <h1>
                PIB:{props.PIB}
            </h1>
            <h2>
                Phone number:{props.phone}
            </h2>
            <h2>
                Gmail:{props.gmail}
            </h2>
        </div>
    );
}
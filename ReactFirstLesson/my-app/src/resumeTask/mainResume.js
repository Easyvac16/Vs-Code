import Resume from "./resume";
import MyCity from "./MyCity"

export default function mainResume() {
    return (
        <div>
            <Resume PIB="Grigoriev Dmytro Igorovich" phone="380688301023" gmail="gdima9051@gmail.com" />
            <MyCity name="Khmelnitskiy" country="Ukraine" year="1431" photo1="5325971421312181117.jpg" photo2="5325971421312181118.jpg" photo3="5325971421312181120.jpg" />
        </div>
    );
}
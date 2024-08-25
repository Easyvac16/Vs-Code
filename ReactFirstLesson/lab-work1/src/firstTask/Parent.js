import FirstPoem from "./FirstPoem";
import SecondPoem from "./SecondPoem";
import Wiliam from "./Wiliam";

export default function Parent() {
    return (
        <div>
            <Wiliam />
            <FirstPoem />
            <hr></hr>
            <SecondPoem />
        </div>

    );
}
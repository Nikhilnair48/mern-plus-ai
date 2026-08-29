import { useState } from "react";

function Demo() {
    const [description, setDescription] = useState("");

    function onDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDescription(event.currentTarget.value);
    }

    return (
        <input
            id="description"
            value={description}
            onChange={onDescriptionChange}
            // event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>
            // onChange={(event) => {
            //     console.log(event);
            //     setDescription(event.currentTarget.value);
            // }}
        />
    )
}

export default Demo;

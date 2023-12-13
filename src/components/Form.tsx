import { useState } from "react";
import Entry from "./Entry";
import Client from "@/core/client";
import Button from "./Button";

interface FormProps {
    client: Client
    ClientChange?: (client: Client) => void
    canceled?: () => void
}

export default function Form(props: FormProps) {

    const id = props.client?.id

    const [name, set_Name] = useState(props.client?.name ?? '')
    const [age, set_Age] = useState(props.client?.age ?? 0)

    return (
        <div>

            {id ? (
                <Entry
                    readOnly
                    text="Código"
                    value={id}
                    className="mb-5"
                />

            ) : false}

            <Entry
                text="nome"
                value={name}
                onChange={set_Name}
                className="mb-5"
            />

            <Entry
                text="Idade"
                type="number"
                value={age}
                onChange={set_Age}
            />
            <div className="flex justify-end mt-7">

                <Button className="from-green-400 to-green-700 mr-2"
                    onClick={() => props.ClientChange?.(new Client(name, +age, id))}>

                    {id ? 'Alterar' : 'Salvar'}
                </Button>

                <Button className="from-gray-400 to-gray-700"
                    onClick={props.canceled}>
                    Cancelar
                </Button>
                
            </div>

        </div>
    )
}
import ColectionClient from "@/backend/db/ColectionClients"
import Client from "@/core/client"
import ClientRepository from "@/core/clientRepository"
import { useState, useEffect } from "react"
import useTableOrForm from "./useTableOrForm"

export default function useClients() {
    const repo: ClientRepository = new ColectionClient()

    const {visibleTable, showForm, showTable} = useTableOrForm() 

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            showTable()
        })
    }

    function selectCliente(client: Client) {
        setClient(client)
        showForm()
    }

    async function deleteClient(client: Client) {
        await repo.delete(client)
        getAll()

    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    }

    function newClient() {
        setClient(Client.empty())
        showForm()
    }


    return {
        client,
        clients,
        saveClient,
        newClient,
        deleteClient,
        selectCliente,
        getAll,
        visibleTable,
        showTable
    }
}
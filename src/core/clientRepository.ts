import Client from "./client";

export default interface ClientRepository {
    save(client: Client): Promise<Client>
    delete(client: Client): Promise<void>
    getAll(): Promise<Client[]>
}
"use client"
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Button from "@/components/Button";
import Form from "@/components/Form";
import useClients from "@/hooks/useClients";


export default function Home() {

  const {
    client,
    clients,
    newClient,
    saveClient,
    selectCliente,
    deleteClient,
    visibleTable,
    showTable
  } = useClients()

  return (

    <main className="flex h-screen justify-center items-center
     bg-gradient-to-r from-blue-500 to-purple-500 text-white">

      <Layout title="Cadastro Simples">
        {visibleTable ? (
          <>
            <div className="flex justify-end">

              <Button className="mb-4
              from-blue-400 to-blue-700"
                onClick={newClient}>

                Novo Cliente

              </Button>

            </div>

            <Table clients={clients}
              clientSelected={selectCliente}
              clientExcluded={deleteClient}
            />
          </>
        ) : (
          <Form client={client}
            ClientChange={saveClient}
            canceled={showTable} />


        )}


      </Layout>

    </main>
  )
}

var ConnectionFactory = (function () {

  const stores = ['negociacoes']
  const version = 3
  const dbName = 'aluraframe'

  var connection = null
  var close = null

  return class ConnectionFactory {

    constructor() {

      throw new Error('A classe ConnectionFactory não pode ser instanciada')
    }

    static getConnection() {

      return new Promise((resolve, reject) => {

        let openRequest = window.indexedDB.open(dbName, version)

        openRequest.onupgradeneeded = e => {

          ConnectionFactory._createStores(e.target.result)
        }

        openRequest.onsuccess = e => {

          if (!connection) {

            connection = e.target.result
            close = connection.close.bind(connection)
            connection.close = () => {

              throw new Error('A conexão não deve ser fechada diretamente, use o método closeConnection')
            }
          }

          resolve(connection)
        }

        openRequest.onerror = e => {

          console.log(e.target.error)
          reject(e.target.error.name)
        }
      })
    }

    static _createStores(connection) {

      stores.forEach(store => {

        if (connection.objectStoreNames.contains(store))
          // Implementar código para salvar os dados antes de deletar
          connection.deleteObjectStore(store)

        connection.createObjectStore(store, {
          autoIncrement: true
        })
      })
    }

    static closeConnection() {

      if (connection) {

        close()
        close = null
      }
    }
  }
})()

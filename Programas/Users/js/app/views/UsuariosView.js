class UsuariosView extends View {

  _header() {

    return `
    <div class="card">
      <div class="card-header">
        <h2>Lista de Usuários</h2>
      </div>
      <div class="card-body">
        <div class="row">
          `;
  }

  _template(model) {

    return `${model.usuarios.map(u => `
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${u.nome}</h5>
                <p class="card-text text-info">
                Cadastro Aprovado.
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${u.tel}</li>
                <li class="list-group-item">${u.rgcnpj}</li>
                <li class="list-group-item">
                  ${u.end}
                </li>
              </ul>
            </div>
          </div>
            `).join("")}
    `;
  }

  _footer() {

    return `
        </div>
      </div>
    </div>
    `;
  }
}

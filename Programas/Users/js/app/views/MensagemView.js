class MensagemView extends View {

  _template(model) {

    return model.texto ? `<p class="alert alert-info text-center">${model.texto}</p>` : '';
  }
}

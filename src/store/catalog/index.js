import StoreModule from "../module";

class CatalogStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      activePage: 1,
      info: {},
    };
  }

  /**
   * Загрузка списка товаров
   */
  async load(activePage = 1) {
    const response = await fetch(`/api/v1/articles?limit=10&skip=${(activePage - 1) * 10}`);
    const json = await response.json();
    this.setState({
      ...this.store.state.catalog,
      items: json.result.items,
      activePage,
    });
  }

  setActivePage(activePage) {
    if (activePage === this.store.catalog.activePage) return

    this.load(activePage)
  }

  async getGoodsInfo(id) {
    const response = await fetch(`/api/v1/articles/${id}?fields=*,maidIn(title,code),category(title)`)
    const { result } = await response.json()
    this.setState({
      ...this.store.state.catalog,
      info: {
        title: result.title,
        description: result.description,
        maidInTitle: result.maidIn.title,
        maidInCode: result.maidIn.code,
        category: result.category.title,
        edition: result.edition,
        price: result.price
      }
    })
  }
}

export default CatalogStore;

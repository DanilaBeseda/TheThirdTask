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
      ...this.store.getState().catalog,
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
      ...this.store.getState().catalog,
      info: result
    })
  }
}

export default CatalogStore;

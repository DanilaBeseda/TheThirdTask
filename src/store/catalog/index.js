import StoreModule from "../module";

class CatalogStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      activePage: 1
    };
  }

  /**
   * Загрузка списка товаров
   */
  async load(activePage = 1, limit = 10) {
    const response = await fetch(`/api/v1/articles?${limit}=10&skip=${(activePage - 1) * 10}`);
    const json = await response.json();
    this.setState({
      items: json.result.items,
      activePage,
    });
  }

  setActivePage(activePage) {
    if (activePage === this.store.catalog.activePage) return

    this.load(activePage)
  }
}

export default CatalogStore;

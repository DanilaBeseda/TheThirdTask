import StoreModule from "../module";

class GoodsStore extends StoreModule {
  initState() {
    return {
      info: {}
    };
  }

  async loadInfo(id) {
    const response = await fetch(`/api/v1/articles/${id}?fields=*,maidIn(title,code),category(title)`)
    const { result } = await response.json()
    this.setState({
      info: result
    })
  }
}

export default GoodsStore;

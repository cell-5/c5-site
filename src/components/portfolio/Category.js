export default class Category {
  constructor(text){
    this.text = text
    this.isSelected = false
  }
  updateCategory(isSelected){
    this.isSelected = isSelected
  }
  getIsSelected(){
    return this.isSelected
  }
  reset(){
    this.isSelected = false
  }
}

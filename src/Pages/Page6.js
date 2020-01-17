
import React from 'react'

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [], text: '', text2: '' ,  text3: '' 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTexttri = this.handleChangeTexttri.bind(this);

  }

  render() {
    return (
      <div>
        <h3>Список дел</h3>
       
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Что нужно сделать?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input
            id="new-todo"
            onChange={this.handleChangeText}
            value={this.state.text2}
          />
           <input
            id="new-todo"
            onChange={this.handleChangeTexttri}
            value={this.state.text3}
          />
          <button>
            Добавить {this.state.items.length + 1}
          </button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }


 
  handleChange(e) {
    this.setState({ text: e.target.value });
    
  }
  handleChangeText(e){
    this.setState({ text2: e.target.value });
    
  }
  handleChangeTexttri(e){
  this.setState({ text3: e.target.value });

}
  handleSubmit(e) {
    e.preventDefault();
    if ((!this.state.text.length)||(!this.state.text2.length)||(!this.state.text3.length)) {
      alert("Слышь где текст?")
      return;
    }
   
    const newItem = {
      text: this.state.text,
      text2: this.state.text2,
      text3: this.state.text3,

      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
       text2: '', 
        text3: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    console.log(this.props.items)
    return (
      <>
      
      <ul>
        
        {this.props.items.map(item => (
          <div key={item.id}>{item.text} {item.text2} {item.text3}</div>
        ))}
      </ul>
      </>
    );
  }
}

export default Page2
 
  
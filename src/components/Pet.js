import React from 'react'

class Pet extends React.Component {
  render() {
    const {pet, onAdoptPet} = this.props
    const symbol = {
      "female": '♀',
      "male": '♂'
    }

    // let buttons;
    // if(pet.isAdopted){
    //   buttons = <button className="ui disabled button">Already adopted</button>
    // } else {
    //   buttons = <button className="ui primary button" onClick={()=> onAdoptPet(pet.id)}>Adopt pet</button>
    // }

    return (
      <div className="card">
        <div className="content">
          <a href="#" className="header">
            {symbol[pet.gender]} 
            {pet.name}
          </a> 
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* {buttons} */}
          {pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={()=> onAdoptPet(pet.id)}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet

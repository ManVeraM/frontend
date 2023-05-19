import React, {useState, useEffect} from "react"
import {button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const SearchComponent = ()=>{
    const URL = "http://20.231.202.18:8000/api/form"
    const [users, setUsers] = ([])
  
    const [search, setSearch] = useState("")


    
    

 



    return(
        <div>
            <button className="btn btn-primary" >Agregar entidad </button>
            <input type="text" placeholder="search" className="form-control" />
            <table className ='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                   <tr className='bg-curso text-white'>
                    <th>name</th>
                    <th>code</th>
                    <th>description</th>
                    </tr>  
                </thead>
                {/* {users.map( (user) => (
                        <tr>
                            <td>{user.name} </td>
                            <td>{user.code} </td>
                            <td>{user.description} </td>

                            <button className="btn btn-primary" >editar entidad</button>
                            {"   "}
                            <button className="btn btn-danger" >borrar entidad</button>
                        </tr>

                    ))} */}
                <tbody>
                    


                </tbody>
            </table>
            {/* <Modal id="insertar">
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} >x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">code</label>
                    <br />
                    <label htmlFor="id">name</label>
                    <br />
                    <label htmlFor="id">description</label>
                    <br />
                   
                   
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal =='insertar'?
                    <button className="btn btn-success" >
                    Insertar
                  </button>: <button className="btn btn-primary" >
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger">Cancelar</button>
                </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar a la empresa
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" >Sí</button>
              <button className="btn btn-secundary" >No</button>
            </ModalFooter>
          </Modal> */}
            

        </div>
    )

}

export default SearchComponent

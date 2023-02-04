import React from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FormComp = ({confirmPurchase, formVis, setFormVis}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (dataDelForm) => {
        confirmPurchase(dataDelForm)
      };

      const handleClose = () => {
        setFormVis(false);
      }
        
      return (
        <>
          <Modal show={formVis} onHide={handleClose} size={"sm"} centered>
            <Modal.Header closeButton>
              <Modal.Title>Finaliza tu compra!</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit(onSubmit)}>

              <Modal.Body>
                {/* Campos y validaciones */}

                {/* Campo nombre */}
                <label>Nombre</label><br />
                <input
                  {...register("nombre", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <br/>
                <br />
                {errors?.nombre?.type === "required" && <p>Ingrese un nombre</p>}
                {errors?.nombre?.type === "minLength" && (
                  <p>El nombre debe tener al menos 2 caracteres</p>
                )}
                
                {/* Campo correo */}
                <label>Email</label><br />
                <input type='email' {...register("email", {minLength: 3, required: true})} />
                <br/>
                <br />
                {errors?.email?.type === "minLength" && (
                  <p>El mail tiene debe tener al menos 3 caracteres</p>
                )}
                {errors?.email?.type === "required" && <p>Ingrese un email</p>}
                
                {/* Campo telefono */}
                <label>Telefono</label><br />
                <input type="number" {...register("phone", { min: 10, maxLength: 10, required: true })} />
                <br/>
                <br />
                {errors?.phone?.type === "minLength" && (
                  <p>El teléfono debe tener 10 digitos</p>
                )}
                {errors?.phone?.type === "required" && <p>Ingrese un telefono</p>}
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="success" type ="submit">
                  Confirmar compra
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </>

      );
};
export default FormComp
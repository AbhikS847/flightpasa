import {useState} from 'react';
import { Container, Form, Button} from 'react-bootstrap';
import {FaPlaneDeparture} from 'react-icons/fa';

const Home = () => {

  const [formData, setFormData] = useState({
    flightFrom:'',
    flightTo:'',
    passengers:0,
    desc:'',
  })

  const {flightFrom, flightTo, passengers, desc} = formData;

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value
    }));
  }

  return (
    <Container className="component-theme text-center">
    <h2 className="">Let's Fly <FaPlaneDeparture size={40} /> </h2>
    <h4 className="py-2">Where would you like to fly from?</h4>
    <Form className="component-form" onSubmit={handleSubmit}>
    <Form.Group className="mb-4">
      <div className="component-subheading"><h4> Departing from</h4></div>
        <Form.Control className="component-form-input text-center" id='flightFrom' name='flightFrom' value={flightFrom} onChange={onChange} type="text" placeholder="Eg. Tribhuvan Airport, Nepal" required/>
      </Form.Group>
      <Form.Group className="mb-3">
      <div className="component-subheading"><h4>Arrving at</h4></div>
        <Form.Control className="component-form-input text-center" id='flightTo' name='flightTo' value={flightTo} onChange={onChange} type="text" placeholder="Eg. Melbourne Airport, VIC" required/>
      </Form.Group>
      <h4 className="py-2">How many passengers?</h4>
      <Form.Group className="mb-3">
      <div className="component-subheading"><h4>Passengers</h4></div>
        <Form.Control className="component-form-input text-center" id='passengers' name='passengers' value={passengers} onChange={onChange} type="number" placeholder="Enter number of passengers" required/>
      </Form.Group>
      <Form.Group className="mb-3">
      <div className="component-subheading"><h4>Description</h4></div>
        <Form.Control as="textarea" rows={4} className="component-form-textarea text-center" id='desc' name='desc' value={desc} onChange={onChange} type="text" placeholder="Enter passenger details here.."/>
        <div className="small">Example: Two adults flying from KTM to MEL on 20th April...</div>
      </Form.Group>
      <Button className="btn-secondary btn-sm mt-2" type='submit'>POST FLIGHT</Button>
      <Button className="btn btn-sm mt-4" type='submit'>EXPLORE FLIGHTS</Button>
    </Form>
    </Container>
  )
}

export default Home
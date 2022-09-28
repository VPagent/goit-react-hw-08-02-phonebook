
import Form from 'components/Form';
import Section from 'components/Section';
import Contacts from 'components/Contacts';



export function App() {
  
  return (
    <>
        <Section title="Phonebook">
          <Form></Form>
        </Section>
        <Section title="Contacts">
          <Contacts/>
        </Section>
    </>
    
  );
}


import React from 'react';
import AddingForm from "./components/AddingForm/AddingForm";
import Container from "./components/UI/Container/Container";
import TodosLinker from "./components/TodosLinker/TodosLinker";

const App = () => {

    return (
        <section className={'py-16'}>
            <Container>
                <div className={'flex flex-col items-center'}>
                    <AddingForm/>
                    <TodosLinker/>
                </div>
            </Container>
        </section>
    )
}
export default App;


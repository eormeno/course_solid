(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    interface HtmlElementProps {
        id: string
        type: HtmlType
    }

    class HtmlElement {
        public id: string
        public type: HtmlType

        constructor({ id, type }: HtmlElementProps) {
            this.id = id
            this.type = type
        }
    }

    interface ItemAttributesProps {
        value: string
        placeholder: string
    }

    class InputAttributes {
        public value: string
        public placeholder: string

        constructor({ value, placeholder }: ItemAttributesProps) {
            this.value = value
            this.placeholder = placeholder
        }
    }

    interface InputElementProps {
        id: string
        value: string
        placeholder: string
    }

    class InputEvents {

        constructor() {
        }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }


    //? Idea para la nueva clase InputElement

    class InputElement {
        public htmlElement: HtmlElement
        public itemAttributes: InputAttributes
        public inputEvents: InputEvents

        constructor(value: string, placeholder: string, id: string) {
            let type : HtmlType = 'input'
            this.htmlElement = new HtmlElement({ id, type})
            this.itemAttributes = new InputAttributes({ value, placeholder })
            this.inputEvents = new InputEvents()
        }
    }

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()
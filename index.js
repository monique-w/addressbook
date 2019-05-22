

class AddressBook {
    constructor (name, email, phone, relation) {
        this.contacts = "Monique";
        this.contacts = "mo@gmail.com"
        this.phone = "678-468-3961";
        this.relation = "me";
    }
}

add(info) {
    this.contacts.push(info);
}
deleteAt(index) {
    this.contacts.splice(index, 1);
    AddressBook.display();
}

print() }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const addressBook = new AddressBook();
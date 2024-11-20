function Employee(employeeID,firstName ,lastName ,email ,department ,hireDate,terminationDate = null) {


    this.employeeID = employeeID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.department = department;
    this.hireDate = hireDate;
    this.terminationDate = terminationDate;

}

function Supplier(supplierID,companyName,zipCode,contactFirstName,contactLastName,contactEmail, lastDelivery,active) {
            this.supplierID = supplierID;
            this.companyName = companyName;
            this.zipCode = zipCode;
            this.contactFirstName = contactFirstName;
            this.contactLastName = contactLastName;
            this.contactEmail = contactEmail;
            this.lastDelivery = lastDelivery;
            this.active = active;



}

function Customer(customerID,firstName ,lastName , email , phoneNumber ,optedOutOfMailingList,lastPurchase ){
    this.customerID = customerID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.optedOutOfMailingList = optedOutOfMailingList;
    this.lastPurchase = lastPurchase ;


}

const employees = [
    new Employee(38647, 'Patricia', 'Barber', 'pbarber@company.com', 'Sales', new Date('2005-01-23'), new Date('2015-01-01')),
    new Employee(72102, 'Kimberley', 'Berry', 'kberry@company.com', 'Manufacturing', new Date('2007-06-21'), new Date('2016-05-01')),
    new Employee(36693, 'Burton', 'Miles', 'bmiles@company.com', 'Manufacturing', new Date('2009-03-01'), new Date('2017-03-15')),
    new Employee(58000, 'Rosa', 'Smith', 'rsmith@company.com', 'Sales', new Date('2012-09-26'), new Date('2018-08-15')),
    new Employee(54929, 'Jane', 'Pruitt', 'jpruitt@company.com', 'Manufacturing', new Date('2015-04-01'), null),
    new Employee(24612, 'Regina', 'Suarez', 'rsuarez@company.com', 'Manufacturing', new Date('2018-11-01'), null),
    new Employee(68392, 'Monroe', 'Carr', 'mcarr@company.com', 'Manufacturing', new Date('2019-01-11'), null),
    new Employee(73604, 'Lonny', 'Contreras', 'lcontreras@company.com', 'HR', new Date('2020-02-24'), null),
    new Employee(37640, 'Alba', 'Guzman', 'aguzman@company.com', 'Manufacturing', new Date('2021-03-10'), null),
    new Employee(61036, 'Drew', 'Cowan', 'dcowan@company.com', 'Manufacturing', new Date('2021-04-04'), null),
    new Employee(33211, 'Ike', 'Wyatt', 'iwyatt@company.com', 'HR', new Date('2021-05-06'), null)
];

const suppliers = [
    new Supplier('ACMED34234', 'ACME Inc.', '34234', 'John', 'Doe', 'jdoe@acmeinc.com', new Date('2021-08-01'), false),
    new Supplier('BESTC23532', 'Best Company', '23532', 'Jane', 'Smith', 'jsmith@bestcompany.com', new Date('2022-02-15'), true),
    new Supplier('COOLS53462', 'Cool Corp', '53462', 'Bob', 'Johnson', 'bjohnson@coolcorp.com', new Date('2022-05-20'), true),
    new Supplier('DELTA23743', 'Delta LLC', '23743', 'Alice', 'Brown', 'abrown@deltallc.com', new Date('2023-01-01'), true),
    new Supplier('EXCEL34865', 'Excel Enterprises', '34865', 'Tom', 'Wilson', 'twilson@excelenterprises.com', new Date('2023-06-30'), true),
    new Supplier('FRESH34235', 'Fresh Foods', '34235', 'Sara', 'Lee', 'slee@freshfoods.com', new Date('2020-05-01'), false)
];

const customers = [
    new Customer(9690528, 'Rickey', 'Key', 'rickeykey@sample.com', '578-708-7817', false, new Date('2023-08-11')),
    new Customer(3985939, 'Clarissa', 'Singleton', 'clarissasingleton@sample.com', '339-593-1528', true, new Date('2023-07-01')),
    new Customer(6268069, 'Domenic', 'Maldonado', 'domenicmaldonado@sample.com', '959-706-4190', false, new Date('2023-06-14')),
    new Customer(3868672, 'Isiah', 'Lowery', 'isiahlowery@test.com', '945-715-3043', true, new Date('2022-05-17')),
    new Customer(5880281, 'Evangeline', 'Figueroa', 'evangelinefigueroa@example.com', '526-803-4658', false, new Date('2023-04-01')),
    new Customer(5916088, 'Mabel', 'Prince', 'mabelprince@test.com', '422-381-8753', true, new Date('2022-03-15')),
    new Customer(5405271, 'Bret', 'Melendez', 'bretmelendez@example.com', '877-575-2516', false, new Date('2023-02-18')),
    new Customer(9239813, 'Robby', 'Haley', 'robbyhaley@trial.com', '601-387-5361', false, new Date('2021-01-21')),
    new Customer(2861338, 'Michelle', 'Lawson', 'michellelawson@test.com', '347-376-8539', false, new Date('2020-12-30'))
];


function displayForm() {
    const role = document.getElementById('role-select').value;
    document.querySelectorAll('.role-form').forEach(form => form.style.display = 'none');
    if (role) {

        document.getElementById(`${role}-form`).style.display = 'block';
       }
}


function aEmployee(event) {
    event.preventDefault() ;
    const id = Number(document.getElementById('employee-id').value);
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email1').value;
    const department = document.getElementById('department').value;
    const hireDate = new Date(document.getElementById('hire-date').value);
    const terminationInput = document.getElementById('termination-data').value;
    const terminationDate = terminationInput ? new Date(terminationInput) : null;


    const newEmployee = new Employee(id, firstName, lastName, email, department, hireDate, terminationDate);
    employees.push(newEmployee);
    alert('Employee added successfully.');
    document.getElementById('employee-form').reset();
                       }


function aSupplier(event) {

    event.preventDefault();
    let id = document.getElementById('supplier-id').value;
    let companyName = document.getElementById('company-name').value;
    let zipCode = document.getElementById('zipcode').value;

    let contactFirstName = document.getElementById('contact-first-name').value;
    let contactLastName = document.getElementById('contact-last-name').value;
    let contactEmail = document.getElementById('contact-email').value;
    let lastDelivery = new Date(document.getElementById('last-delivery').value);
    let active = document.getElementById('is-active').checked;


    const newSupplier = new Supplier(id, companyName, zipCode, contactFirstName,contactLastName, contactEmail, lastDelivery, active);
    suppliers.push(newSupplier);

    alert('suppliers added .');

    document.getElementById('supplier-form').reset();

}
//////////////////////////////////////////////////////////////////////////////////////////////////
function aCustomer(event) {
    event.preventDefault();

    const id = Number(document.getElementById('customer-id').value);
    const firstName = document.getElementById('first-name2').value;
    const lastName = document.getElementById('lastname3').value;
    const email = document.getElementById('email2').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const optedOutOfMailingList = document.getElementById('opted').checked;
    const lastPurchase = new Date(document.getElementById('lastPurchase').value);

    const newCustomer = new Customer(id, firstName, lastName, email, phoneNumber, optedOutOfMailingList, lastPurchase);
    customers.push(newCustomer);

    alert('Customer added successfully.');
    document.getElementById('customer-form').reset();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////


function displayEmployees() {
    const informationDiv = document.getElementById('information');
    informationDiv.innerHTML = '<h3>Employees</h3>';
    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.innerHTML = `
     <p>ID: ${employee.employeeID}</p>
      <p>Name: ${employee.firstName} ${employee.lastName}</p></b>
      <p>Email: ${employee.email}</p></b>
      <p>Department: ${employee.department}</p></b>
      <p>Hire Date: ${employee.hireDate.toDateString()}</p></b>
      <p>Termination Date: ${employee.terminationDate ? employee.terminationDate.toDateString() : 'N/A'}</p></b>
      <hr>
    `;
        informationDiv.appendChild(employeeDiv);
    });
}

function displaySuppliers() {
    let informationDiv = document.getElementById('information');

    informationDiv.innerHTML = '<h3>Suppliers</h3>';
    suppliers.forEach(supplier => {


        let supplierDiv = document.createElement('div');
        supplierDiv.innerHTML = `
      <p><strong>ID:</strong> ${supplier.supplierID}</p>
      <p><strong>Company Name:</strong> ${supplier.companyName}</p>
      <p><strong>Zip Code:</strong> ${supplier.zipCode}</p>
      <p><strong>Contact Name:</strong> ${supplier.contactFirstName} ${supplier.contactLastName}</p>
      <p><strong>Contact Email:</strong> ${supplier.contactEmail}</p>
      <p><strong>Last Delivery:</strong> ${supplier.lastDelivery.toDateString()}</p>
      <p><strong>Active:</strong> ${supplier.active ? 'Yes' : 'No'}</p>
      <hr>
    `;

        informationDiv.appendChild(supplierDiv);
    });

}
///////////////////////////////////////////////////////////////////////////////////////////



function displayCustomers() {
    const informationDiv = document.getElementById('information');
    const customersDiv = document.createElement('div');
    informationDiv.innerHTML = '';
    customersDiv.innerHTML = '<h3>Customers List</h3>';

    customers.forEach(customer => {
        const customerDiv = document.createElement('div');
        customerDiv.innerHTML = `
            <p><strong>ID:</strong> ${customer.customerID}</p>
            <p><strong>Name:</strong> ${customer.firstName} ${customer.lastName}</p>
            <p><strong>Email:</strong> ${customer.email}</p>
            <p><strong>Phone Number:</strong> ${customer.phoneNumber}</p>
            <p><strong>Opted Out of Mailing List:</strong> ${customer.optedOutOfMailingList ? 'Yes' : 'No'}</p>
            <p><strong>Last Purchase:</strong> ${customer.lastPurchase.toDateString()}</p>
            <hr>
        `;
        customersDiv.appendChild(customerDiv);
    } );

    informationDiv.appendChild(customersDiv);}



///////////////////////////////////////////////////////////////////////////////////////
function displayAll() {
    const informationDiv = document.getElementById('information');
    informationDiv.innerHTML = '';

    const employeesDiv = document.createElement('div');
    employeesDiv.innerHTML = '<h3>Employees</h3>';
    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.innerHTML = `
            <p>ID: ${employee.employeeID}</p>
            <p>Name: ${employee.firstName} ${employee.lastName}</p>
            <p>Email: ${employee.email}</p>
            <p>Department: ${employee.department}</p>
            <p>Hire Date: ${employee.hireDate.toDateString()}</p>
            <p>Termination Date: ${employee.terminationDate ? employee.terminationDate.toDateString() : 'N/A'}</p>
            <hr>
        `;
        employeesDiv.appendChild(employeeDiv);
    });
    informationDiv.appendChild(employeesDiv);

    const suppliersDiv = document.createElement('div');
    suppliersDiv.innerHTML = '<h3>Suppliers</h3>';
    suppliers.forEach(supplier => {
        const supplierDiv = document.createElement('div');
        supplierDiv.innerHTML = `
            <p><strong>ID:</strong> ${supplier.supplierID}</p>
            <p><strong>Company Name:</strong> ${supplier.companyName}</p>
            <p><strong>Zip Code:</strong> ${supplier.zipCode}</p>
            <p><strong>Contact Name:</strong> ${supplier.contactFirstName} ${supplier.contactLastName}</p>
            <p><strong>Contact Email:</strong> ${supplier.contactEmail}</p>
            <p><strong>Last Delivery:</strong> ${supplier.lastDelivery.toDateString()}</p>
            <p><strong>Active:</strong> ${supplier.active ? 'yes' : 'No'}</p>
            <hr>
        `;
        suppliersDiv.appendChild(supplierDiv);
    });
    informationDiv.appendChild(suppliersDiv);


    const customersDiv = document.createElement('div');
    customersDiv.innerHTML = '<h3>Customers</h3>';
    customers.forEach(customer => {
        const customerDiv = document.createElement('div');
        customerDiv.innerHTML = `
            <p><strong>ID:</strong> ${customer.customerID}</p>
            <p><strong>Name:</strong> ${customer.firstName} ${customer.lastName}</p>
            <p><strong>Email:</strong> ${customer.email}</p>
            <p><strong>Phone Number:</strong> ${customer.phoneNumber}</p>
            <p><strong>Opted Out of Mailing List:</strong> ${customer.optedOutOfMailingList ? 'yes' : 'No'}</p>
            <p><strong>Last Purchase:</strong> ${customer.lastPurchase.toDateString()}</p>
            <hr>
        `;
        customersDiv.appendChild(customerDiv);
    });
    informationDiv.appendChild(customersDiv);
          }





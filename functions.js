// Read more: http://mrbool.com/creating-a-crud-form-with-html5-local-storage-and-json/26719#ixzz32NaC1Ert
$(function(){
  var operation = "A"; //"A"=Adding; "E"=Editing
  var selected_index = -1; //Index of the selected list item
  var tbClients = localStorage.getItem("tbClients");//Retrieve the stored data
  tbClients = JSON.parse(tbClients); //Converts string to object
  if(tbClients == null) //If there is no data, initialize an empty array tbClients = [];
});

function Add(){
  var client = JSON.stringify({
    ID : $("#txtID").val(),
    Name : $("#txtName").val(),
    Phone : $("#txtPhone").val(),
    Email : $("#txtEmail").val()
  });
  tbClients.push(client);
  localStorage.setItem("tbClients", JSON.stringify(tbClients));
  alert("The data was saved.");
  return true;
}

function Edit(){
  tbClients[selected_index] = JSON.stringify({
    ID : $("#txtID").val(),
    Name : $("#txtName").val(),
    Phone : $("#txtPhone").val(),
    Email : $("#txtEmail").val()
    });//Alter the selected item on the table
  localStorage.setItem("tbClients", JSON.stringify(tbClients));
  alert("The data was edited.")
  operation = "A"; //Return to default value return true;
}

function Delete(){
  tbClients.splice(selected_index, 1);
  localStorage.setItem("tbClients", JSON.stringify(tbClients));
  alert("Client deleted.");
}

function List(){
  $("#tblList").html("");
  $("#tblList").html( "<thead>"+ " <tr>"+ "  <th></th>"+ " <th>ID</th>"+ " <th>Name</th>"+ " <th>Phone</th>"+
                      "  <th>Email</th>"+ "  </tr>"+ "</thead>"+ "<tbody>"+ "</tbody>" );
  for(var i in tbClients){
    var cli = JSON.parse(tbClients[i]);
    $("#tblList tbody").append("<tr>"+ "  <td><img src='edit.png' alt='Edit"+i+"' class='btnEdit'/>
                                          <img src='delete.png' alt='Delete"+i+"' class='btnDelete'/></td>" + "
                                          <td>"+cli.ID+"</td>" + "  <td>"+cli.Name+"</td>" + "  <td>"+cli.Phone+"</td>" + "
                                          <td>"+cli.Email+"</td>" + "</tr>");
  }
}



Read more: http://mrbool.com/creating-a-crud-form-with-html5-local-storage-and-json/26719#ixzz32NcAGEe4

Read more: http://mrbool.com/creating-a-crud-form-with-html5-local-storage-and-json/26719#ixzz32Nc1sK54

Read more: http://mrbool.com/creating-a-crud-form-with-html5-local-storage-and-json/26719#ixzz32NbNDrT4

<template>
  <div>
    <Button @click="addItem">
      <i class="pi pi-plus" style="margin: 2px"></i>
      Add
    </Button>
    <!-- <SimpleForm  /> -->
    <Dialog v-model:visible="visible" modal header="Header" :style="{width: '50vw'}" :breakpoints="{'960px': '75vw', '640px': '90vw'}">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText type="text" v-model="username" placeholder="Username"/>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-phone"></i>
        </InputGroupAddon>
        <InputText type="text" v-model="phone" placeholder="Phone"/>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-home"></i>
        </InputGroupAddon>
        <InputText type="text" v-model="address" placeholder="Address"/>
      </InputGroup>
      
      <template #footer>
        <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="HideDialog" />
        <Button label="Save" icon="pi pi-check" class="p-button-text" @click="Save" />
        <!-- <SubmitButton :loading="$isLoading.value" :data="item" @click="Save()" /> -->
      </template> 
    </Dialog>
    <DataTable :value="data" :paginator="true" :rows="10" dataKey="id">
      <Column field="name" header="Name" :sortable="true"></Column>
      <Column field="phone" header="Phone" :sortable="true"></Column>
      <Column field="address" header="Address" :sortable="true"></Column>
      <Column header="Actions">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="updateItem(slotProps.data)"></Button>
          <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="deleteItem(slotProps.data.id)"></Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      visible: false,
      edit: 0,
    }
  },

  methods: {
    updateItem(item) {
      // Implement update logic here
      this.visible = true
      this.edit = item.id
      this.username = item.name
      this.phone = item.phone
      this.address = item.address
      console.log('Update item:', item)
    },
    async deleteItem(id) {
      // Implement delete logic here
      console.log('Delete item with ID:', id)
      const data = await $fetch('/api/employee/'+id, {
        method: 'DELETE',
        headers: {
          Authorization: '123',
        }
      })
      console.log(data);
      if(data){
        console.log("Terhapus");
        this.data = this.data.filter(item => item.id !== id)
      }else{
        console.log("Gagal");
      }
      
    },
    addItem(){
      this.visible = true
      this.username = ''
      this.phone = ''
      this.address = ''
    },
    async Save(){
      if(this.edit != 0){
        const data = await $fetch('/api/employee/'+this.edit, {
          method: 'PUT',
          headers: {
            Authorization: '123',
          },
          body: {
            name: this.username,
            phone: this.phone,
            address: this.address
          }
        })
        if(data){
          this.data = this.data.map(item => {
            if(item.id == this.edit){
              item.name = this.username
              item.phone = this.phone
              item.address = this.address
            }
            return item
          })
          this.HideDialog()
        }else{
          alert('Something Wrong');
        }
      }else{
        const data = await $fetch('/api/employee', {
          method: 'POST',
          headers:{
            Authorization: '123',
          },
          body: {
            name: this.username,
            phone: this.phone,
            address: this.address
          }
        });
        if(data){
          this.data.push({
            id: this.data.length + 1,
            name: this.username,
            phone: this.phone,
            address: this.address 
          })
          this.HideDialog()
        }else{
          alert('Something Wrong');
        }
      }
      // console.log(this.username + " " + this.password);
    },
    HideDialog(){
      this.visible = false
      if (this.edit != 0){
        this.edit = 0
        this.username = ''
        this.phone = ''
        this.address = ''
      }
    }
  },
  async mounted() {
    console.log('waiting');
    const data = await $fetch('/api/employee', {
      method: 'GET',
      headers: {
        Authorization: '123',
      }
    })
    this.data = data
    console.log(data); 
  }
}
</script>
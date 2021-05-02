const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			charge_todos: true,
			initial_plant_name: "Aquí aparecerá el nombre de tu planta",
			initial_img_url: "",
			name: "Aquí aparecerá el nombre de tu planta",
			todos: [
				[
					{ plant_name: "Crea listas de tareas" },
					{ plant_url: "https://whatsup.es/wp-content/uploads/2020/07/partes-de-la-planta-en-ingles.jpg" },

					{
						tasks: [
							{ task: "Tarea 1", freq: 24, type: "Horas" },
							{ task: "Tarea 2", freq: 24, type: "Horas" }
						]
					}
				],
				[
					{ plant_name: "Lleva el conteo de tus plantas" },
					{ plant_url: "https://whatsup.es/wp-content/uploads/2020/07/partes-de-la-planta-en-ingles.jpg" },

					{
						tasks: [
							{ task: "Tarea 1", freq: 24, type: "Horas" },
							{ task: "Tarea 2", freq: 24, type: "Horas" }
						]
					}
				]
			],
			plants: [
				{
					name: "Chile Jalapeño",
					scientName: "Capsicum annuum var"
				},
				{
					name: "Chile Poblano / Chile Ancho",
					scientName: "Capsicum annuum var"
				},
				{
					name: "Chile Habanero Manzano",
					scientName: "Capsicum annuum var"
				},
				{
					name: "Chile Güero Húngaro Variedad Santa Fe",
					scientName: "Capsicum annuum var"
				},
				{
					name: "Betabel Remolacha",
					scientName: "Beta vulgaris"
				},
				{
					name: "Cabeza Larga",
					scientName: "Curcubita pepo"
				},
				{
					name: "Cebolla Amarilla",
					scientName: "Allium cepa"
				},
				{
					name: "Crisantemo Gigante Blanco",
					scientName: "Leucanthemum maximum"
				},
				{
					name: "Girasol Belleza de Otoño Variado",
					scientName: "Helianthus decapetalus"
				}
			],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			changeName: name_doc => {
				const store = getStore();
				if (name_doc == "" || name_doc == undefined) {
					setStore({ name: store.initial_plant_name });
				} else {
					setStore({ name: name_doc });
				}
			},
			changeInitialName: name_doc => {
				setStore({ initial_plant_name: name_doc });
			},
			changeInitialURL: plant_url => {
				setStore({ initial_img_url: plant_url });
			},
			changeChargeValue: value => {
				if (value === false) {
					setStore({ charge_todos: true });
				} else {
					setStore({ charge_todos: false });
				}
			},
			modifyTodos: control => {
				const store = getStore();
				let final_array = store.todos;
				final_array.unshift(control);
				setStore({ todos: final_array, charge_todos: true });
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

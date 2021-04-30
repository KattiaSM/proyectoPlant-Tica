const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			charge_todos: true,
			todos: [
				[
					{ plant_name: "Agrega plantas" },
					{ plant_url: "https://whatsup.es/wp-content/uploads/2020/07/partes-de-la-planta-en-ingles.jpg" },

					{
						tasks: [
							{ task: "DDDDDD", freq: 24, type: "Horas" },
							{ task: "tarea2", freq: 24, type: "Horas" }
						]
					}
				],
				[
					{ plant_name: "Agrega plantas2" },
					{ plant_url: "https://whatsup.es/wp-content/uploads/2020/07/partes-de-la-planta-en-ingles.jpg" },

					{
						tasks: [
							{ task: "tarea de abajo", freq: 24, type: "Horas" },
							{ task: "tarea2", freq: 24, type: "Horas" }
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
				if (name_doc == "" || name_doc == undefined) {
					setStore({ name: "Aquí irá el nombre de tu planta" });
				} else {
					setStore({ name: name_doc });
				}
			},
			changeChargeValue: value => {
				if (value === false) {
					setStore({ charge_todos: true });
				} else {
					setStore({ charge_todos: false });
				}
			},
			modifyTodos: (list, oldlist) => {
				setStore({ todos: oldlist, charge_todos: true });
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

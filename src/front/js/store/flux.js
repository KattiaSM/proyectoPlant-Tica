const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userLogged: false,
			token: "",
			id: "",
			message: null,
			charge_todos: true,
			initial_plant_name: "Aquí aparecerá el nombre de tu planta",
			info_create_todos: [["Tu tarea"], [""], ["Horas"]],
			initial_img_url:
				"https://64.media.tumblr.com/9e0731c5fd8e97d29a6f1f6928355572/tumblr_p2zkqfzA4B1wxub9uo1_1280.gifv",
			name: "Aquí aparecerá el nombre de tu planta",
			todos: [
				[
					{ plant_name: "Realiza listas de tareas" },
					{ plant_url: "https://media1.giphy.com/media/3ohs4i3JaSelQpFYVW/giphy.gif" },

					{
						tasks: [
							{ task: "Agua", freq: 24, type: "Horas" },
							{ task: "Abono", freq: 24, type: "Horas" }
						]
					}
				],
				[
					{ plant_name: "Cuidá tus plantas" },
					{
						plant_url:
							"https://ecoosfera.com/wp-content/imagenes/2020/11/plantas-time-lapse-movimiento-vida.gif"
					},

					{
						tasks: [
							{ task: "Sustrato", freq: 24, type: "Horas" },
							{ task: "Amor <3", freq: 24, type: "Horas" }
						]
					}
				],
				[
					{ plant_name: "Llevá el conteo de tus plantas" },
					{
						plant_url: "https://media2.giphy.com/media/3o6ZtaClRw5uXz18JO/giphy.gif"
					},
					{
						tasks: [
							{ task: "Luz", freq: 24, type: "Horas" },
							{ task: "Enraizante", freq: 24, type: "Horas" }
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

			favs: [
				{
					scientific_name: "Quercus Rotundifolia",
					synonymous: "Roble de Hoja Perenne",
					year: "1785",
					family: "Fagaceae",
					scientific_expanded: "Quercus rotundifolia f. dolichocalyx",
					url: "https://bs.plantnet.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30"
				},
				{
					scientific_name: "Urtica-diotica",
					synonymous: "Ortiga",
					year: "1753",
					family: "Urticaceae",
					scientific_expanded: "Urtica haussknechtii",
					url: "https://bs.plantnet.org/image/o/85256a1c2c098e254fefe05040626a4df49ce248"
				},
				{
					scientific_name: "Dactylis glomerata",
					synonymous: "Pastos de la huerta",
					year: "1753",
					family: "Poaceae",
					scientific_expanded: "Dactylis glomerata subsp. himalayensis",
					url: "https://bs.plantnet.org/image/o/428f40dadfa0281dc890ead17fcd07882f9efb09"
				},
				{
					scientific_name: "Festuca rubra",
					synonymous: "Festuca roja",
					year: "1753",
					family: "Fagaceae",
					scientific_expanded: "Quercus rotundifolia f. dolichocalyx",
					url: "https://bs.plantnet.org/image/o/0b932c8a275efc79f473a71bec20d6f15e9b6b90"
				},
				{
					scientific_name: "Plantago lanceolata",
					synonymous: "Plátano de hoja estrecha",
					year: "1753",
					family: "Poaceae",
					scientific_expanded: "Festuca austrodolomitica",
					url: "https://bs.plantnet.org/image/o/78a8374f009e6ed2dc71ca17d18e4271ea0a2a7b"
				},
				{
					scientific_name: "Quercus robur",
					synonymous: "Roble inglés",
					year: "1753",
					family: "Fagaceae",
					scientific_expanded: "Quercus robur subsp. broteroan",
					url: "https://bs.plantnet.org/image/o/2292b670683abdaac354389514105df0018d9ef8"
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
			deleteFav: index => {
				const store = getStore();
				let temporal = store.favs;
				temporal.splice(index, 1);
				setStore({ favs: temporal });
			},
			deleteTodo: index => {
				const store = getStore();
				let temporal = store.todos;
				if (temporal.length > 1) {
					console.log(index);
					temporal.splice(index, 1);
					setStore({ todos: temporal });
				} else {
					console.log(temporal.lenght);
					alert("Lo sentimos, debe tener almenos una lista de tareas disponible.");
				}
			},
			modifyTodos: control => {
				const store = getStore();
				let final_array = store.todos;
				final_array.unshift(control);
				setStore({ todos: final_array, charge_todos: true });
			},

			logout: () => {
				localStorage.setItem("x-access-token", null);
				sessionStorage.removeItem("token");
				setStore({ userLogged: false });

				// Se configura la opción del home
				getActions().activeOption("/login");

				ShowAlert("top-end", "success", "", "¡Sesión cerrada exitosamente!", false, true, 2000);
			},

			moveDataToModify: control => {
				let temporal = control;
				let tasks = [];
				let freq = [];
				let type = [];

				temporal.map((item, index) => {
					tasks.push(item.task);
					freq.push(item.freq);
					type.push(item.type);
				});
				setStore({ info_create_todos: [tasks, freq, type] });
			},
			restoreDataToModify: url => {
				let url_temporal = url;
				setStore({
					initial_img_url: url_temporal
				});
				setStore({ info_create_todos: [["Tu tarea"], [""], ["Horas"]] });
			},
			savingToken: (int_token, int_id) => {
				sessionStorage.setItem("token", int_token);
				setStore({ token: int_token });
				setStore({ id: int_id });
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

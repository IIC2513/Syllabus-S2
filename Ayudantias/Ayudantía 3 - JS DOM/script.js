document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // ESTADO GLOBAL (Listo para usar)
    // ==========================================================================
    const state = {
        mode: "flex", // 'flex' | 'grid'
        itemCount: 4,
        selectedItemIndex: 1,
        flexContainer: {
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "normal",
            gap: "12px",
        },
        gridContainer: {
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            justifyItems: "stretch",
            alignItems: "stretch",
            gap: "16px",
        },
        items: {
            1: {
                flexGrow: "0",
                flexShrink: "1",
                flexBasis: "auto",
                alignSelf: "auto",
                order: "0",
                gridColumn: "auto",
                gridRow: "auto",
                justifySelf: "auto",
            },
        },
    };

    // ==========================================================================
    // Punto 1: Selección de Elementos del DOM
    // Selecciona los elementos correspondientes usando getElementById o querySelector
    // ==========================================================================

    // TODO 1.1: Obtener el contenedor interactivo (#playground)
    const playground = null; // Reemplazar null

    // TODO 1.2: Obtener el bloque donde se muestra el código CSS generado (#code-output)
    const codeOutput = null; // Reemplazar null

    // TODO 1.3: Obtener los botones de cambio de modo (#btn-mode-flex y #btn-mode-grid)
    const btnModeFlex = null; // Reemplazar null
    const btnModeGrid = null; // Reemplazar null

    // Elementos auxiliares del panel de control
    const lblMode = document.getElementById("lbl-mode");
    const flexControlsSection = document.getElementById(
        "flex-container-controls",
    );
    const gridControlsSection = document.getElementById(
        "grid-container-controls",
    );
    const flexItemControls = document.getElementById("flex-item-controls");
    const gridItemControls = document.getElementById("grid-item-controls");
    const selectTargetItem = document.getElementById("select-target-item");
    const btnAddItem = document.getElementById("btn-add-item");
    const btnRemoveItem = document.getElementById("btn-remove-item");
    const btnReset = document.getElementById("btn-reset");

    const initItemState = (idx) => {
        if (!state.items[idx]) {
            state.items[idx] = {
                flexGrow: "0",
                flexShrink: "1",
                flexBasis: "auto",
                alignSelf: "auto",
                order: "0",
                gridColumn: "auto",
                gridRow: "auto",
                justifySelf: "auto",
            };
        }
    };

    // ==========================================================================
    // Punto 2: Aplicación de Estilos Dinámicos al DOM
    // Modifica los estilos en línea del elemento 'playground' según el estado actual
    // ==========================================================================
    const applyStyles = () => {
        if (!playground) return;

        if (state.mode === 'flex') {
            // TODO 2.1: Asignar 'flex' al display del playground
            // playground.style.display = ...

            // TODO 2.2: Asignar flexDirection, flexWrap, justifyContent y gap desde state.flexContainer
            // playground.style.flexDirection = ...
            // playground.style.flexWrap = ...
            // playground.style.justifyContent = ...
            // playground.style.alignItems = state.flexContainer.alignItems;
            // playground.style.gap = ...

            // Limpieza de Grid
            playground.style.gridTemplateColumns = '';
            playground.style.gridTemplateRows = '';
            playground.style.justifyItems = '';
            if (lblMode) lblMode.textContent = 'display: flex;';

        } else {
            // TODO 2.3: Configurar el modo grid en el playground asignando display, gridTemplateColumns y gap
            // playground.style.display = 'grid';
            // playground.style.gridTemplateColumns = state.gridContainer.gridTemplateColumns;
            // playground.style.gap = state.gridContainer.gap;

            // Limpieza de Flex
            playground.style.flexDirection = '';
            playground.style.flexWrap = '';
            playground.style.justifyContent = '';
            if (lblMode) lblMode.textContent = 'display: grid;';
        }

        // Actualización de estilos de los hijos (ítems)
        const domItems = playground.querySelectorAll(".item");
        domItems.forEach((el) => {
            const idx = parseInt(el.dataset.index, 10);
            initItemState(idx);
            const itemStyles = state.items[idx];
            const metaSpan = el.querySelector(".item-meta");

            if (state.mode === "flex") {
                el.style.flexGrow = itemStyles.flexGrow;
                el.style.flexShrink = itemStyles.flexShrink;
                el.style.flexBasis = itemStyles.flexBasis;
                el.style.alignSelf = itemStyles.alignSelf;
                el.style.order = itemStyles.order;

                el.style.gridColumn = "";
                el.style.gridRow = "";
                el.style.justifySelf = "";

                if (metaSpan)
                    metaSpan.textContent = `grow:${itemStyles.flexGrow} | order:${itemStyles.order}`;
            } else {
                el.style.gridColumn = itemStyles.gridColumn;
                el.style.gridRow = itemStyles.gridRow;
                el.style.justifySelf = itemStyles.justifySelf;
                el.style.alignSelf = itemStyles.alignSelf;

                el.style.flexGrow = "";
                el.style.flexShrink = "";
                el.style.flexBasis = "";
                el.style.order = "";

                if (metaSpan) metaSpan.textContent = `col:${itemStyles.gridColumn}`;
            }

            // Sincronizar clase visual del ítem activo
            if (idx === state.selectedItemIndex) {
                el.classList.add("selected");
            } else {
                el.classList.remove("selected");
            }
        });

        renderCssSnippet();
    };

    // Generación del bloque de código CSS formateado
    const renderCssSnippet = () => {
        if (!codeOutput) return;
        let css = `/* Contenedor */\n.contenedor {\n  display: ${state.mode};\n`;
        if (state.mode === "flex") {
            css += `  flex-direction: ${state.flexContainer.flexDirection};\n`;
            css += `  flex-wrap: ${state.flexContainer.flexWrap};\n`;
            css += `  justify-content: ${state.flexContainer.justifyContent};\n`;
            css += `  align-items: ${state.flexContainer.alignItems};\n`;
            if (state.flexContainer.alignContent !== "normal") {
                css += `  align-content: ${state.flexContainer.alignContent};\n`;
            }
            css += `  gap: ${state.flexContainer.gap};\n}\n`;
        } else {
            css += `  grid-template-columns: ${state.gridContainer.gridTemplateColumns};\n`;
            css += `  grid-template-rows: ${state.gridContainer.gridTemplateRows};\n`;
            css += `  justify-items: ${state.gridContainer.justifyItems};\n`;
            css += `  align-items: ${state.gridContainer.alignItems};\n`;
            css += `  gap: ${state.gridContainer.gap};\n}\n`;
        }

        const currentItem = state.items[state.selectedItemIndex];
        if (currentItem) {
            css += `\n/* Caja Seleccionada (.item-${state.selectedItemIndex}) */\n.item-${state.selectedItemIndex} {\n`;
            if (state.mode === "flex") {
                if (currentItem.flexGrow !== "0")
                    cssText += `  flex-grow: ${currentItem.flexGrow};\n`;
                if (currentItem.flexShrink !== "1")
                    cssText += `  flex-shrink: ${currentItem.flexShrink};\n`;
                if (currentItem.flexBasis !== "auto")
                    cssText += `  flex-basis: ${currentItem.flexBasis};\n`;
                if (currentItem.alignSelf !== "auto")
                    cssText += `  align-self: ${currentItem.alignSelf};\n`;
                if (currentItem.order !== "0")
                    cssText += `  order: ${currentItem.order};\n`;
            } else {
                if (currentItem.gridColumn !== "auto")
                    cssText += `  grid-column: ${currentItem.gridColumn};\n`;
                if (currentItem.gridRow !== "auto")
                    cssText += `  grid-row: ${currentItem.gridRow};\n`;
                if (currentItem.justifySelf !== "auto")
                    cssText += `  justify-self: ${currentItem.justifySelf};\n`;
                if (currentItem.alignSelf !== "auto")
                    cssText += `  align-self: ${currentItem.alignSelf};\n`;
            }
            css += `}`;
        }
        codeOutput.textContent = css;
    };

    // ==========================================================================
    // Punto 3: Event Listeners y Lectura de Datos del Usuario
    // Registra los eventos 'change' o 'input' para actualizar el estado
    // ==========================================================================

    const selectFlexDir = document.getElementById('flex-direction');
    if (selectFlexDir) {
        // TODO 3.1: Escuchar el evento 'change', actualizar state.flexContainer.flexDirection y llamar a applyStyles()
        // selectFlexDir.addEventListener('change', (e) => {
        //   ...
        // });
    }

    const rangeGapFlex = document.getElementById('gap-flex');
    const spanGapVal = document.getElementById('gap-flex-val');
    if (rangeGapFlex) {
        // TODO 3.2: Escuchar el evento 'input' para actualizar state.flexContainer.gap.
        // TODO 3.2: Reflejar el texto en spanGapVal y llamar a applyStyles()
        // rangeGapFlex.addEventListener('input', (e) => {
        //   const valor = `${e.target.value}px`;
        //   ...
        // });
    }

    // Controles adicionales vinculados
    document.getElementById("flex-wrap")?.addEventListener("change", (e) => {
        state.flexContainer.flexWrap = e.target.value;
        applyStyles();
    });
    document
        .getElementById("justify-content-flex")
        ?.addEventListener("change", (e) => {
            state.flexContainer.justifyContent = e.target.value;
            applyStyles();
        });
    document
        .getElementById("align-items-flex")
        ?.addEventListener("change", (e) => {
            state.flexContainer.alignItems = e.target.value;
            applyStyles();
        });
    document
        .getElementById("align-content-flex")
        ?.addEventListener("change", (e) => {
            state.flexContainer.alignContent = e.target.value;
            applyStyles();
        });

    document
        .getElementById("grid-template-columns")
        ?.addEventListener("change", (e) => {
            state.gridContainer.gridTemplateColumns = e.target.value;
            applyStyles();
        });
    document
        .getElementById("grid-template-rows")
        ?.addEventListener("change", (e) => {
            state.gridContainer.gridTemplateRows = e.target.value;
            applyStyles();
        });
    document
        .getElementById("justify-items-grid")
        ?.addEventListener("change", (e) => {
            state.gridContainer.justifyItems = e.target.value;
            applyStyles();
        });
    document
        .getElementById("align-items-grid")
        ?.addEventListener("change", (e) => {
            state.gridContainer.alignItems = e.target.value;
            applyStyles();
        });
    document.getElementById("gap-grid")?.addEventListener("input", (e) => {
        const valor = `${e.target.value}px`;
        state.gridContainer.gap = valor;
        const lbl = document.getElementById("gap-grid-val");
        if (lbl) lbl.textContent = valor;
        applyStyles();
    });

    // Controles para hijos
    selectTargetItem?.addEventListener("change", (e) => {
        state.selectedItemIndex = parseInt(e.target.value, 10);
        syncItemInputsWithState();
        applyStyles();
    });

    document.getElementById("item-flex-grow")?.addEventListener("input", (e) => {
        state.items[state.selectedItemIndex].flexGrow = e.target.value;
        applyStyles();
    });
    document
        .getElementById("item-flex-shrink")
        ?.addEventListener("input", (e) => {
            state.items[state.selectedItemIndex].flexShrink = e.target.value;
            applyStyles();
        });
    document
        .getElementById("item-flex-basis")
        ?.addEventListener("change", (e) => {
            state.items[state.selectedItemIndex].flexBasis = e.target.value;
            applyStyles();
        });
    document
        .getElementById("item-align-self-flex")
        ?.addEventListener("change", (e) => {
            state.items[state.selectedItemIndex].alignSelf = e.target.value;
            applyStyles();
        });
    document.getElementById("item-order-flex")?.addEventListener("input", (e) => {
        state.items[state.selectedItemIndex].order = e.target.value;
        applyStyles();
    });

    document
        .getElementById("item-grid-column")
        ?.addEventListener("change", (e) => {
            state.items[state.selectedItemIndex].gridColumn = e.target.value;
            applyStyles();
        });
    document.getElementById("item-grid-row")?.addEventListener("change", (e) => {
        state.items[state.selectedItemIndex].gridRow = e.target.value;
        applyStyles();
    });
    document
        .getElementById("item-justify-self-grid")
        ?.addEventListener("change", (e) => {
            state.items[state.selectedItemIndex].justifySelf = e.target.value;
            applyStyles();
        });
    document
        .getElementById("item-align-self-grid")
        ?.addEventListener("change", (e) => {
            state.items[state.selectedItemIndex].alignSelf = e.target.value;
            applyStyles();
        });

    // ==========================================================================
    // Punto 4: Creación Dinámica de Elementos en el DOM
    // Implementa la lógica para crear y añadir una nueva caja
    // ==========================================================================

    if (btnAddItem) {
        btnAddItem.addEventListener('click', () => {
            state.itemCount += 1;
            const newIndex = state.itemCount;
            initItemState(newIndex);

            // TODO 4.1: Crear un elemento 'div' usando document.createElement
            const newItem = null; // Reemplazar con document.createElement('div')

            // TODO 4.2: Asignarle la clase 'item' y el atributo data-index con newIndex
            // newItem.className = 'item';
            // newItem.dataset.index = newIndex;

            // TODO 4.3: Definir su contenido HTML interno con un título y un span para metadatos
            // newItem.innerHTML = `
            //     <span class="item-title">Item ${newIndex}</span>
            //     <span class="item-meta"></span>
            // `;

            // TODO 4.4: Agregar el evento 'click' para que se seleccione al pincharlo
            // newItem.addEventListener('click', () => {
            //     state.selectedItemIndex = newIndex;
            //     if (selectTargetItem) selectTargetItem.value = newIndex;
            //     syncItemInputsWithState();
            //     applyStyles();
            // });

            // TODO 4.5: Insertar newItem dentro del playground usando appendChild
            // playground.appendChild(newItem);

            updateItemSelectOptions();
            applyStyles();
        });
    }

    // Eliminación de cajas
    btnRemoveItem?.addEventListener("click", () => {
        if (state.itemCount <= 1) return;
        const lastItem = playground.querySelector(
            `.item[data-index="${state.itemCount}"]`,
        );
        if (lastItem) playground.removeChild(lastItem);

        delete state.items[state.itemCount];
        state.itemCount -= 1;

        if (state.selectedItemIndex > state.itemCount) {
            state.selectedItemIndex = state.itemCount;
        }

        updateItemSelectOptions();
        syncItemInputsWithState();
        applyStyles();
    });

    // ==========================================================================
    // HELPERS Y RESET
    // ==========================================================================
    const updateItemSelectOptions = () => {
        if (!selectTargetItem) return;
        selectTargetItem.innerHTML = "";
        for (let i = 1; i <= state.itemCount; i++) {
            const opt = document.createElement("option");
            opt.value = i;
            opt.textContent = `Caja ${i}`;
            if (i === state.selectedItemIndex) opt.selected = true;
            selectTargetItem.appendChild(opt);
        }
    };

    const syncItemInputsWithState = () => {
        initItemState(state.selectedItemIndex);
        const itemData = state.items[state.selectedItemIndex];

        const setValue = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.value = val;
        };

        setValue("item-flex-grow", itemData.flexGrow);
        setValue("item-flex-shrink", itemData.flexShrink);
        setValue("item-flex-basis", itemData.flexBasis);
        setValue("item-align-self-flex", itemData.alignSelf);
        setValue("item-order-flex", itemData.order);
        setValue("item-grid-column", itemData.gridColumn);
        setValue("item-grid-row", itemData.gridRow);
        setValue("item-justify-self-grid", itemData.justifySelf);
        setValue("item-align-self-grid", itemData.alignSelf);
    };

    const setMode = (newMode) => {
        state.mode = newMode;
        if (newMode === "flex") {
            btnModeFlex?.classList.add("active");
            btnModeGrid?.classList.remove("active");
            flexControlsSection?.classList.remove("hidden");
            gridControlsSection?.classList.add("hidden");
            flexItemControls?.classList.remove("hidden");
            gridItemControls?.classList.add("hidden");
            playground.classList.add("flex-mode");
            playground.classList.remove("grid-mode");
        } else {
            btnModeGrid?.classList.add("active");
            btnModeFlex?.classList.remove("active");
            gridControlsSection?.classList.remove("hidden");
            flexControlsSection?.classList.add("hidden");
            gridItemControls?.classList.remove("hidden");
            flexItemControls?.classList.add("hidden");
            playground.classList.add("grid-mode");
            playground.classList.remove("flex-mode");
        }
        applyStyles();
    };

    btnModeFlex?.addEventListener("click", () => setMode("flex"));
    btnModeGrid?.addEventListener("click", () => setMode("grid"));

    // Delegación de clic para ítems ya presentes en el HTML inicial
    playground?.querySelectorAll(".item").forEach((el) => {
        el.addEventListener("click", () => {
            const idx = parseInt(el.dataset.index, 10);
            state.selectedItemIndex = idx;
            if (selectTargetItem) selectTargetItem.value = idx;
            syncItemInputsWithState();
            applyStyles();
        });
    });

    // Botón de Reinicio
    btnReset?.addEventListener("click", () => {
        state.flexContainer = {
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "normal",
            gap: "12px",
        };
        state.gridContainer = {
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            justifyItems: "stretch",
            alignItems: "stretch",
            gap: "16px",
        };
        state.items = {};
        for (let i = 1; i <= state.itemCount; i++) initItemState(i);

        const setInput = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.value = val;
        };

        setInput("flex-direction", "row");
        setInput("flex-wrap", "nowrap");
        setInput("justify-content-flex", "flex-start");
        setInput("align-items-flex", "stretch");
        setInput("align-content-flex", "normal");
        setInput("gap-flex", "12");
        const spanF = document.getElementById("gap-flex-val");
        if (spanF) spanF.textContent = "12px";

        setInput("grid-template-columns", "repeat(3, 1fr)");
        setInput("grid-template-rows", "auto");
        setInput("justify-items-grid", "stretch");
        setInput("align-items-grid", "stretch");
        setInput("gap-grid", "16");
        const spanG = document.getElementById("gap-grid-val");
        if (spanG) spanG.textContent = "16px";

        syncItemInputsWithState();
        applyStyles();
    });

    // Inicialización de la aplicación
    for (let i = 1; i <= state.itemCount; i++) initItemState(i);
    updateItemSelectOptions();
    syncItemInputsWithState();
    applyStyles();
});

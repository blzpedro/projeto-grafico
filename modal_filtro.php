<form class="col s12" action="post">
    <div class="row">
        <div class="input-field col s12">
            <div id="valor"></div>
            <div class="row slider-labels">
                <div class="col s6 center-align"><strong>Valor inicial:</strong> <span id="valor_inicial"></span></div>
                <div class="col s6 center-align"><strong>Valor final:</strong> <span id="valor_final"></span></div>
                <form>
                    <input type="hidden" id="field_inicial" name="valor_inicial" value="">
                    <input type="hidden" id="field_final" name="valor_final" value="">
                </form>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="input-field col s12">
            <div id="desconto"></div>
            <div class="row slider-labels">
                <div class="col s6 center-align"><strong>Desconto mínimo:</strong> <span id="desc_min"></span></div>
                <div class="col s6 center-align"><strong>Desconto máximo:</strong> <span id="desc_max"></span></div>
                <input type="hidden" id="field_descMin" name="field_descMin" value="">
                <input type="hidden" id="field_descMax" name="field_descMax" value="">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="input-field col s12">
            <input placeholder="" id="periodos" type="number" max="12">
            <label for="periodos">Quantidade de períodos(máx. 12)</label>
        </div>
    </div>
    <div class="row">
        <div class="input-field col s6">
            <select id="regioes">
                <option value="" disabled selected>Escolha uma região</option>
                <option value="Região 1">Região 1</option>
                <option value="Região 2">Região 2</option>
                <option value="Região 3">Região 3</option>
                <option value="Região 4">Região 4</option>
                <option value="Região 5">Região 5</option>
            </select>
            <label>Regiões</label>
        </div>
        <div class="input-field col s6">
            <select id="polos">
                <option value="" disabled selected>Escolha um polo</option>
                <option value="Polo 1">Polo 1</option>
                <option value="Polo 2">Polo 2</option>
                <option value="Polo 3">Polo 3</option>
                <option value="Polo 4">Polo 4</option>
                <option value="Polo 5">Polo 5</option>
            </select>
            <label>Polos</label>
        </div>
    </div>
    <button class="btn waves-effect waves-light" type="submit" id="save_filter" name="action">Filtrar
        <i class="material-icons right">send</i>
    </button>
</form>
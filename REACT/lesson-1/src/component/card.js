export function Card(p) {


    return <li class="contries__item contry-card">
        <img class="contries-card__img" src="./svg/germany.png" alt="" width="267" height="=170" />
        <div class="country-card__content">
            <h3 class="country-card__text">{p.name}</h3>
            <dl class="country-card__data-list">
                <div class="coutry-cart__data-wrapper">

                    <dt>Population: </dt>
                    <dd>81,770,900</dd>

                </div>
                <div class="coutry-cart__data-wrapper">
                    <dt>Region: </dt>
                    <dd>{p.region}</dd>
                </div>
                <div class="coutry-cart__data-wrapper">
                    <dt>Capital: </dt>
                    <dd>{p.capital}</dd>
                </div>
            </dl>
        </div>
    </li>


}
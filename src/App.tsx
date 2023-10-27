import { Match, Switch, createMemo, createSignal } from "solid-js";
import { Language, translations } from "./translations.ts";
import { createStore } from "solid-js/store";
import { isValidHttpUrl } from "./utils.ts";

export function App() {
  const [lang, setLang] = createSignal<Language>("en");
  const [isManualPrice, setIsManualPrice] = createSignal(false);

  const [formState, setFormState] = createStore({
    propertyName: "",
    location: "",
    hasNif: false,
    hasPassportPhoto: false,
    hasWorkContract: false,
    manualPrice: "",
  });

  const price = createMemo(() => {
    if (formState.manualPrice) return formState.manualPrice;

    return (
      50 -
      (formState.hasNif ? 20 : 0) -
      (formState.hasPassportPhoto ? 10 : 0) -
      (formState.hasWorkContract ? 20 : 0)
    );
  });
  return (
    <div class="overflow-x-hidden p-4">
      <div class="relative">
        <button
          class="absolute right-0 top-0 rounded border-2 border-black px-2"
          onClick={() => setLang((prev) => (prev === "en" ? "pt" : "en"))}
        >
          {translations.languageButtonText[lang()]}
        </button>
        <h1 class="text-3xl">{translations.configureVisitTitle[lang()]}</h1>

        <form>
          <label class="block" for="property-name">
            {translations.propertyNameLabel[lang()]}
          </label>
          <input
            id="property-name"
            value={formState.propertyName}
            onInput={(e) => setFormState("propertyName", e.currentTarget.value)}
            class="rounded border border-black"
          />

          <label class="block" for="location">
            {translations.locationLabel[lang()]}
          </label>
          <input
            id="location"
            value={formState.location}
            onInput={(e) => setFormState("location", e.currentTarget.value)}
            class="rounded border border-black"
          />
          <div class="pb-2" />
          <fieldset>
            <legend>{translations.customerDataLegend[lang()]}</legend>
            <div>
              <input
                type="checkbox"
                id="nif"
                name="data"
                value="nif"
                checked={formState.hasNif}
                onChange={() => setFormState("hasNif", (checked) => !checked)}
              />
              <label for="nif" class="pl-2">
                {translations.nifCheckboxLabel[lang()]}
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="passport"
                name="data"
                value="passport"
                checked={formState.hasPassportPhoto}
                onChange={() =>
                  setFormState("hasPassportPhoto", (checked) => !checked)
                }
              />
              <label for="passport" class="pl-2">
                {translations.passportCheckboxLabel[lang()]}
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="employment-contract"
                name="data"
                value="employment-contract"
                checked={formState.hasWorkContract}
                onChange={() =>
                  setFormState("hasWorkContract", (checked) => !checked)
                }
              />
              <label for="employment-contract" class="pl-2">
                {translations.workContractCheckboxLabel[lang()]}
              </label>
            </div>
          </fieldset>

          <div class="relative">
            <Switch>
              <Match when={!isManualPrice()}>
                <div>{price()}€</div>
              </Match>
              <Match when={isManualPrice()}>
                <input
                  id="price"
                  value={formState.manualPrice}
                  onInput={(e) =>
                    setFormState("manualPrice", e.currentTarget.value)
                  }
                  class="w-16 rounded border border-black"
                />
                €
              </Match>
            </Switch>
            <button
              type="button"
              class="absolute right-0 top-0 rounded border-2 border-black px-2"
              onClick={() => setIsManualPrice((isManual) => !isManual)}
            >
              {translations.manualPriceButtonLabel[lang()]}
            </button>
          </div>
        </form>

        <div class="pb-8" />
        <hr />
        <h1>{translations.customerViewHeader[lang()]}</h1>
        <hr />
        <div class="pb-8" />

        <h1 class="text-3xl">{formState.propertyName}</h1>

        <h2>{translations.addressHeader[lang()]}</h2>
        <p class="pl-4">
          <Switch>
            <Match when={isValidHttpUrl(formState.location)}>
              <a href={formState.location} class="text-blue-500 underline">
                {formState.location}
              </a>
            </Match>
            <Match when={!isValidHttpUrl(formState.location)}>
              {formState.location}
            </Match>
          </Switch>
        </p>

        <h2>{translations.viewDateTimeHeader[lang()]}</h2>
        <div class="pl-4">
          <input type="datetime-local" />
        </div>

        <div class="pb-4" />

        <div class="flex justify-center">
          <button class="rounded border-2 border-black px-2">
            {translations.reserveNowButton[lang()]}
            {Number(price()) > 0 ? ` ${price()}€` : ""}
          </button>
        </div>
      </div>
    </div>
  );
}

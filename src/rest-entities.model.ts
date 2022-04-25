/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.33.956 on 2021-11-29 11:53:32.

import {
  JsonClassType,
  JsonIdentityInfo,
  JsonIdentityReference,
  JsonProperty,
  JsonSubTypes,
  JsonTypeId,
  JsonTypeInfo,
  JsonTypeInfoAs,
  JsonTypeInfoId,
  JsonTypeName,
  ObjectIdGenerator,
} from './index';

@JsonTypeInfo({
  use: JsonTypeInfoId.NAME,
  include: JsonTypeInfoAs.PROPERTY,
  property: '@typeJSON',
})
@JsonSubTypes({
  types: [
    { class: () => Product, name: 'Product' },
    { class: () => ProductData, name: 'ProductData' },
    { class: () => Chapter, name: 'Chapter' },
    { class: () => ReferencedImage, name: 'ReferencedImage' },
    { class: () => ClassicCriterion, name: 'ClassicCriterion' },
    { class: () => ClassicCriterionValue, name: 'ClassicCriterionValue' },
    { class: () => MapCriterion, name: 'MapCriterion' },
    { class: () => MapCriterionValue, name: 'MapCriterionValue' },
    { class: () => BoolCriterion, name: 'BoolCriterion' },
    { class: () => BoolCriterionValue, name: 'BoolCriterionValue' },
    { class: () => SliderCriterion, name: 'SliderCriterion' },
    { class: () => SliderCriterionValue, name: 'SliderCriterionValue' },
    { class: () => CarouselCriterion, name: 'CarouselCriterion' },
    { class: () => CarouselCriterionValue, name: 'CarouselCriterionValue' },
    { class: () => UseCaseChapter, name: 'UseCaseChapter' },
    { class: () => ColorCriterionValue, name: 'ColorCriterionValue' },
    { class: () => ColorCriterion, name: 'ColorCriterion' },
    { class: () => PropagationResult, name: 'PropagationResult' },
    { class: () => PropagationChapterResult, name: 'PropagationChapterResult' },
    { class: () => PropagationValueOfCriterion, name: 'PropagationValueOfCriterion' },
  ],
})
@JsonIdentityReference({ alwaysAsId: true })
@JsonIdentityInfo({ generator: ObjectIdGenerator.PropertyGenerator, property: '@idJSON' })
export class AbstractAnnotationJSON {
  @JsonProperty()
  '@idJSON'!: string;

  @JsonProperty()
  @JsonTypeId()
  '@typeJSON'!: string;
}

export class AbstractPersistedObject extends AbstractAnnotationJSON {
  @JsonProperty()
  id!: number;
}

export class AbstractPleiadeObject extends AbstractPersistedObject {
  @JsonProperty()
  pleiadeId!: number;
}

export abstract class IHasImage {
  public abstract getCriterionImage(): ReferencedImage | undefined;
}

@JsonTypeName({ value: 'ReferencedImage' })
export class ReferencedImage extends AbstractPersistedObject {
  @JsonProperty()
  url!: string;
}

@JsonTypeName({ value: 'Chapter' })
export class Chapter extends AbstractPersistedObject {
  @JsonProperty()
  name!: string;

  @JsonProperty()
  @JsonClassType({ type: () => [Product] })
  product!: Product;

  @JsonProperty()
  @JsonClassType({ type: () => [ReferencedImage] })
  defaultImage?: ReferencedImage;

  @JsonProperty()
  @JsonClassType({ type: () => [Array, [AbstractCriterion]] })
  criteria!: AbstractCriterion<any>[];
}

@JsonTypeName({ value: 'Product' })
export class Product extends AbstractPleiadeObject {
  @JsonProperty()
  name!: string;

  @JsonProperty()
  active!: boolean;

  @JsonProperty()
  suffixURL!: string;

  @JsonProperty()
  groupNavigation!: boolean;
}

@JsonTypeName({ value: 'ProductData' })
export class ProductData extends Product {
  @JsonProperty()
  @JsonClassType({ type: () => [Array, [Chapter]] })
  chapters!: Chapter[];
}

@JsonTypeName({ value: 'UseCaseChapter' })
export class UseCaseChapter extends AbstractPersistedObject implements IHasImage {
  @JsonProperty()
  @JsonClassType({ type: () => [Chapter] })
  chapter!: Chapter;

  @JsonProperty()
  @JsonClassType({ type: () => [ReferencedImage] })
  image!: ReferencedImage;

  getCriterionImage(): ReferencedImage | undefined {
    return this.image;
  }
}

export class AbstractCriterion<T extends AbstractCriterionValue<any>> extends AbstractPleiadeObject implements IHasImage {
  @JsonProperty()
  @JsonClassType({ type: () => [Chapter] })
  chapter!: Chapter;

  @JsonProperty()
  @JsonClassType({ type: () => [Array, [AbstractCriterionValue]] })
  values!: T[];

  @JsonProperty()
  name!: string;

  getCriterionImage(): ReferencedImage | undefined {
    return undefined;
  }
}

export class AbstractCriterionValue<T extends AbstractCriterion<any>> extends AbstractPleiadeObject {
  @JsonProperty()
  name!: string;

  @JsonProperty()
  @JsonClassType({ type: () => [AbstractCriterion] })
  criterion!: T;
}

@JsonTypeName({ value: 'BoolCriterion' })
export class BoolCriterion extends AbstractCriterion<BoolCriterionValue> implements IHasImage {
  @JsonProperty()
  @JsonClassType({ type: () => [ReferencedImage] })
  image?: ReferencedImage;

  getCriterionImage(): ReferencedImage | undefined {
    return this.image;
  }
}

@JsonTypeName({ value: 'BoolCriterionValue' })
export class BoolCriterionValue extends AbstractCriterionValue<BoolCriterion> {
  @JsonProperty()
  boolValue!: boolean;
}

@JsonTypeName({ value: 'CarouselCriterion' })
export class CarouselCriterion extends AbstractCriterion<CarouselCriterionValue> {}

@JsonTypeName({ value: 'CarouselCriterionValue' })
export class CarouselCriterionValue extends AbstractCriterionValue<CarouselCriterion> {
  @JsonProperty()
  @JsonClassType({ type: () => [ReferencedImage] })
  image!: ReferencedImage;
}

@JsonTypeName({ value: 'ClassicCriterion' })
export class ClassicCriterion extends AbstractCriterion<ClassicCriterionValue> implements IHasImage {
  @JsonProperty()
  @JsonClassType({ type: () => [ReferencedImage] })
  image?: ReferencedImage;

  getCriterionImage(): ReferencedImage | undefined {
    return this.image;
  }
}

@JsonTypeName({ value: 'ClassicCriterionValue' })
export class ClassicCriterionValue extends AbstractCriterionValue<ClassicCriterion> {}

@JsonTypeName({ value: 'MapCriterion' })
export class MapCriterion extends AbstractCriterion<MapCriterionValue> {
  @JsonProperty()
  svgContent!: string;
}

@JsonTypeName({ value: 'MapCriterionValue' })
export class MapCriterionValue extends AbstractCriterionValue<MapCriterion> {
  @JsonProperty()
  path!: string;
}

@JsonTypeName({ value: 'ColorCriterion' })
export class ColorCriterion extends AbstractCriterion<ColorCriterionValue> {}

@JsonTypeName({ value: 'ColorCriterionValue' })
export class ColorCriterionValue extends AbstractCriterionValue<ColorCriterion> {
  @JsonProperty()
  colorHex!: string;
}

@JsonTypeName({ value: 'SliderCriterion' })
export class SliderCriterion extends AbstractCriterion<SliderCriterionValue> implements IHasImage {
  @JsonProperty()
  // @JsonClassType({type: () => [SLIDER_TYPE]})
  sliderType!: SLIDER_TYPE;

  @JsonProperty()
  @JsonClassType({ type: () => [ReferencedImage] })
  image?: ReferencedImage;

  getCriterionImage(): ReferencedImage | undefined {
    return this.image;
  }
}

@JsonTypeName({ value: 'SliderCriterionValue' })
export class SliderCriterionValue extends AbstractCriterionValue<SliderCriterion> {
  @JsonProperty()
  rank!: number;
}

export type SLIDER_TYPE = 'HORIZONTAL_BAR' | 'SPEED_COUNTER';

@JsonTypeName({ value: 'PropagationResult' })
export class PropagationResult extends AbstractAnnotationJSON {
  @JsonProperty()
  price!: number;

  @JsonProperty()
  @JsonClassType({ type: () => [Array, [PropagationChapterResult]] })
  resultByChapters!: PropagationChapterResult[];
}

@JsonTypeName({ value: 'PropagationChapterResult' })
export class PropagationChapterResult extends AbstractAnnotationJSON {
  @JsonProperty()
  chapterId!: number;

  @JsonProperty()
  responseChapter!: string;

  @JsonProperty()
  @JsonClassType({ type: () => [Array, [PropagationValueOfCriterion]] })
  selectedIds!: PropagationValueOfCriterion[];

  @JsonProperty()
  @JsonClassType({ type: () => [Array, [PropagationValueOfCriterion]] })
  forbiddenIds!: PropagationValueOfCriterion[];
}

@JsonTypeName({ value: 'PropagationValueOfCriterion' })
export class PropagationValueOfCriterion extends AbstractAnnotationJSON {
  @JsonProperty()
  criterionId!: number;

  @JsonProperty()
  valueId!: number;
}

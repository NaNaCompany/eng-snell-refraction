export const tool = {
  "id": "E047",
  "title": "스넬 굴절각 계산기",
  "inputs_text": "굴절률 n₁,n₂ [무차원], 법선 기준 입사각 θ₁ [rad 또는 °]",
  "formula": "θ₂ = asin((n₁/n₂) sin θ₁)",
  "output_text": "법선 기준 굴절각 θ₂ [°]",
  "assumptions": "n₁,n₂>0, 입사각 0~90°. 비흡수 등방 매질의 경계면을 가정한다. asin 인수가 1보다 크면 허위 숫자 대신 전반사로 결과 없음 처리한다.",
  "purpose": "굴절각 스넬 법칙 계산 / 광선 경로 검산",
  "sources": [
    {
      "label": "OpenStax · Refraction",
      "url": "https://openstax.org/books/university-physics-volume-3/pages/1-3-refraction"
    }
  ],
  "slug": "eng-snell-refraction",
  "category": "광학",
  "result_label": "법선 기준 굴절각 θ₂",
  "result_dimension": "angle",
  "fields": [
    {
      "key": "n1",
      "label": "입사 매질 굴절률 n₁",
      "dimension": "ratio",
      "example": 1,
      "constraint": "positive",
      "display_unit": "1",
      "display_value": "1"
    },
    {
      "key": "n2",
      "label": "굴절 매질 굴절률 n₂",
      "dimension": "ratio",
      "example": 1.5,
      "constraint": "positive",
      "display_unit": "1",
      "display_value": "1.5"
    },
    {
      "key": "theta",
      "label": "법선 기준 입사각 θ₁",
      "dimension": "angle",
      "example": 0.5235987755982988,
      "constraint": "incidentAngle",
      "display_unit": "rad",
      "display_value": "0.5235987755983"
    }
  ],
  "site": "https://nanalab.kr/eng-snell-refraction/",
  "repository": "https://github.com/NaNaCompany/eng-snell-refraction",
  "condition": "",
  "output_unit": "deg"
};

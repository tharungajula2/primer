---
title: Credit Risk
description: End-to-end Indian bank credit risk from borrower and facility structure through deterioration, loss measurement, prudential classification, capital consequences and recovery.
order: 20
collection: finance
verified: unverified
---

Indian banking lens: RBI prudential framework + Ind AS 109 + Basel as adopted in India.

```text
BORROWER / OBLIGOR / GROUP
        ↓
LOAN / FACILITY / COMMITMENT
        ↓
PRIMARY REPAYMENT SOURCE
        ↓
UNDERWRITING
        ↓
FACILITY STRUCTURE
        ↓
COLLATERAL / GUARANTEE / CHARGE
        ↓
DRAWN + UNDRAWN + CONTINGENT EXPOSURE
        ↓
PERFORMING CREDIT
        ↓
BEHAVIOUR + FINANCIAL + COVENANT MONITORING
        ↓
DETERIORATION
        ↓
ARREARS / DPD / SMA / WATCHLIST
        ↓
RBI NPA / DEFAULT / CREDIT-IMPAIRED
        ↓
PD + LGD + EAD
        ↓
EXPECTED LOSS
        ↓
IND AS 109 BRIDGE + RBI / BASEL CAPITAL BRIDGE
        ↓
CONCENTRATION + LARGE EXPOSURES
        ↓
STRESS
        ↓
WORKOUT / RECOVERY / RESTRUCTURING
        ↓
WRITE-OFF / RESIDUAL LOSS
        ↓
ACTUAL EXPERIENCE
        ↓
RATING / MODEL / POLICY FEEDBACK
```

**Primary repayment source first; collateral second.**

## 1. Credit risk = non-payment + incomplete recovery

| Layer | Credit question | Loss channel |
|---|---|---|
| Borrower | Will obligations be met | Default likelihood |
| Facility | How much can be drawn | Exposure at failure |
| Security | What value survives | Recovery severity |
| Portfolio | What fails together | Concentration and correlation |
| Bank | What loss can be absorbed | Provision and capital consequence |

```text
Contractual obligation
→ payment expected
→ payment missed or borrower weakens
→ exposure crystallises
→ recovery sources tested
→ cash recovered
→ unrecovered amount
→ economic loss
```

Credit risk therefore starts before arrears and ends after recovery. Borrower quality drives the likelihood of failure, facility structure controls how much can be outstanding when failure arrives, and security plus recovery mechanics determine how much value is ultimately lost.

### Never confuse

```text
Default ≠ Loss
Loss ≠ Exposure
Exposure ≠ Balance
Collateral ≠ Repayment capacity
Provision ≠ Capital
```

## 2. Retail, MSME and corporate credit use different risk units

| Dimension | Retail | MSME | Corporate |
|---|---|---|---|
| Primary risk unit | Customer + account | Business + proprietor / promoter + facility | Obligor + group + facility |
| Typical decisioning | Score + policy | Hybrid score + analyst | Internal rating + analyst + authority |
| Primary repayment source | Household income | Business cash generation | Enterprise cash flow |
| Core external data | CIC report + income evidence | CIC + GST / banking + financials | Financials + industry + market data |
| Main structural risk | Product mechanics | Working-capital cycle + owner dependence | Group structure + leverage + refinancing |
| Monitoring centre | Behaviour | Conduct + turnover + financials | Financials + covenants + liquidity |
| Workout mode | Collections | Collections + restructuring | Workout + restructuring + enforcement |

Retail lending gets most of its signal from repeated account behaviour inside standardised products. MSME lending depends more heavily on cash conversion, promoter dependence and working-capital discipline. Corporate lending shifts the centre of gravity to enterprise cash flow, capital structure, group dependencies and refinancing risk.

The risk dimensions do not change with segment: likelihood, severity and exposure remain separate. What changes is the evidence available and the judgement required to interpret it.

## 3. Customer, borrower, obligor, group, account and facility are different objects

The grain matters because different questions attach to different objects. Default can be governed at an obligor level, account conduct is observed at account level, facility terms determine contractual availability, and concentration requires connected entities to be aggregated beyond the legal borrower.

| Object | Meaning | Main credit use | Typical grain |
|---|---|---|---|
| Customer | Relationship party | Service and relationship view | Person / entity |
| Borrower | Party receiving credit | Contract and repayment | Person / entity |
| Co-borrower | Joint contractual debtor | Joint repayment liability | Person / entity |
| Obligor | Legal entity owing performance | Default and PD | Legal entity |
| Connected obligor | Economically linked debtor | Dependency and contagion | Linked entity |
| Group | Connected economic entities | Concentration and support | Economic group |
| Product | Lending archetype | Mechanics | Product class |
| Account | Booking record | Balance and conduct | Account |
| Facility | Contractual credit line | Terms and limits | Facility |
| Exposure | Amount economically at risk | Loss and capital | Exposure |
| Guarantor | Party promising payment support | Recovery and CRM | Support provider |
| Collateral provider | Party providing secured asset | Security enforceability | Asset owner |

### Never confuse

```text
Customer ≠ Borrower
Borrower ≠ Obligor
Obligor ≠ Group
Product ≠ Facility
Facility ≠ Account
Facility ≠ Exposure
Guarantor ≠ Borrower
```

## 4. Balance, exposure and commitment are different quantities

A current balance records what is funded now. Credit risk also has to ask what can still be drawn and what contingent obligation can become funded before or at default. That is why commitment and exposure concepts cannot be replaced by the accounting balance alone.

| Quantity | Contains | Excludes / caveat | Main use |
|---|---|---|---|
| Sanction | Approved contractual ceiling | Availability conditions may remain | Credit authority |
| Limit | Operative borrowing ceiling | Drawing power may be lower | Facility control |
| Drawing power | Eligible borrowing against current assets | Stale or ineligible assets | Working-capital control |
| Drawn balance | Amount currently used | Future drawing | Accounting balance |
| Undrawn amount | Available but unused commitment | Cancelled / unavailable portion | Liquidity and EAD |
| Contingent amount | Non-funded obligation | Funding only after trigger | Off-balance-sheet exposure |
| Exposure | Economic amount at risk | Depends on question | Risk measurement |
| EAD | Expected exposure at default | Not necessarily current balance | EL and capital |

### Never confuse

```text
Sanction amount ≠ Limit
Limit ≠ Drawing power
Drawing power ≠ Balance
Balance ≠ Exposure
Exposure ≠ EAD
Undrawn ≠ Risk-free
```

## 5. Every loan and facility belongs to a product-mechanics family

| Family | Facility type | Repayment mechanic | Main risk driver | EAD mechanic |
|---|---|---|---|---|
| Term | Term loan | Scheduled principal + interest | Cash flow + leverage | Amortising balance |
| Term | Demand loan | Demand / short tenor | Liquidity + rollover | Current balance |
| Retail secured | Housing / mortgage loan | Long amortisation | Affordability + property | Amortising balance |
| Secured | Loan against property | Instalment / bullet | Cash flow + property | Schedule balance |
| Retail unsecured | Personal / consumer loan | Instalments | Income + behaviour | Amortising balance |
| Retail | Education loan | Moratorium + instalments | Future income + co-obligor | Schedule balance |
| Asset finance | Vehicle / equipment finance | Instalments | Asset use + cash flow | Amortising balance |
| Secured | Gold-backed loan | Bullet / instalment | Margin + gold value | Balance |
| Agriculture | Agricultural term loan | Crop / activity schedule | Yield + price + season | Schedule balance |
| Project | Project finance | Sculpted debt service | Project cash flow + completion | Draw + amortisation |
| Transaction | Acquisition finance | Transaction-specific | Leverage + refinancing | Drawn / committed |
| Working capital | Cash credit | Revolving | Stock + receivables + cash cycle | Drawn + future draw |
| Working capital | Overdraft | Revolving | Liquidity stress + conduct | Drawn + future draw |
| Working capital | Revolving credit line | Draw / repay / redraw | Liquidity + refinancing | Drawn + CCF on undrawn |
| Working capital | Working-capital demand loan | Short funded tranche | Operating cycle | Current balance |
| Retail revolving | Credit card | Revolving | Behaviour + utilisation | Drawn + future use |
| Trade | Bills purchased | Receivable collection | Buyer / seller performance | Funded bill |
| Trade | Bills discounted | Receivable collection | Obligor quality | Funded bill |
| Trade | Receivables / invoice finance | Receivable liquidation | Dilution + debtor quality | Advance against receivable |
| Export | Packing / pre-shipment credit | Export cycle | Execution + buyer | Funded amount |
| Export | Post-shipment / export credit | Export receivable | Buyer + country + collection | Funded receivable |
| Trade | Trade-related funded advance | Transaction liquidation | Goods + counterparty | Funded amount |
| Non-fund | Letter of credit | Payment after compliant trigger | Applicant + trade event | Contingent → funded |
| Non-fund | Bank guarantee | Payment after valid invocation | Applicant + beneficiary event | Contingent → funded |
| Non-fund | Co-acceptance | Payment if buyer fails | Buyer + bill | Contingent → funded |
| Commitment | Undrawn cancellable line | Availability can cease | Draw propensity | Regulatory / internal conversion |
| Commitment | Undrawn committed line | Bank remains committed | Stress drawdown | CCF on undrawn |

### Spine case — Shakti Components Private Limited

Shakti Components Private Limited is an auto-component manufacturer with an ₹8.00 crore cash-credit sanction. Its primary repayment source is operating cash conversion; downside support comes from stock, receivables and collateral property.

## 6. Amortising, bullet, revolving and contingent facilities fail differently

| Structure | Balance path | Stress behaviour | Main EAD question | Main recovery question |
|---|---|---|---|---|
| Amortising | Declining | Missed instalments | Balance at failure | Remaining tenor + security |
| Bullet | Stable until maturity | Refinance dependence | Full maturity balance | Exit source + collateral |
| Balloon | Partial amortisation | Large terminal payment | Balloon at failure | Refinance + asset value |
| Demand | Short / callable | Renewal dependence | Current funded amount | Liquidity + security |
| Revolving | Variable | Draws rise under stress | Future utilisation | Current assets + guarantees |
| Contingent | Off-balance-sheet | Trigger converts to funded | Conversion probability | Reimbursement + security |

```text
Revolving stress
→ cash generation weakens
→ borrower uses liquidity buffer
→ drawdown increases
→ EAD rises before default
```

```text
Contingent stress
→ guarantee invoked / LC devolves
→ off-balance-sheet claim becomes funded
→ collection starts against applicant
```

Shakti Components carries a cash-credit facility. Its ₹8.00 crore sanction is revolving, availability is constrained by drawing power, and stress can increase funded use before the account becomes NPA.

## 7. Primary repayment source comes before collateral

A credit structure is sustainable only when the normal cash-generating activity can meet the contractual obligation. Collateral is realised after the normal repayment mechanism has failed, usually with delay, cost and uncertainty. Strong security can therefore reduce severity without making a weak repayment source acceptable.

The underwriting judgement weighs recurrence and visibility of cash flow, sensitivity to stress, refinancing dependence and the point at which repayment would require asset sale rather than business cash. Collateral then tests the downside: value, control, priority, enforceability and time to recovery.

| Question | Primary source | Secondary source |
|---|---|---|
| Retail housing | Household disposable income | Property sale |
| Vehicle finance | Household / business cash flow | Vehicle realisation |
| MSME working capital | Operating cash conversion | Stock + receivables + collateral |
| Corporate term loan | Enterprise free cash flow | Charged assets + guarantees |
| Project finance | Project cash flow | Project security package |
| Trade finance | Transaction / receivable liquidation | Goods + recourse + guarantee |

```text
Credit decision
→ identify repayment source
→ test sustainability
→ stress cash flow
→ structure facility
→ test collateral for downside
```

### Permanent trap

```text
High collateral value ≠ strong borrower
Low LTV ≠ low PD
Guarantee ≠ operating cash flow
Security surplus ≠ repayment capacity
```

## 8. Underwriting evidence changes by borrower segment

Underwriting is not a hunt for one decisive metric. Evidence is weighed as a coherent repayment story: capacity to pay, willingness and history of payment, stability of the cash source, existing leverage, and whether the proposed structure remains serviceable under plausible stress.

Collateral changes the downside but does not repair an underwriting gap in sustainable repayment. A refer decision exists because uncertainty can be resolvable: missing evidence, inconsistent bureau data, unexplained account conduct or a structure that can be tightened without changing the economic borrower risk.

| Area | Retail | MSME | Corporate |
|---|---|---|---|
| Identity | KYC + bureau identity | Entity + proprietor / promoters | Group + legal entities |
| Credit history | CIC tradelines + DPD | CIC + banking conduct | External rating + lender conduct where relevant |
| Repayment capacity | Income + obligations | Cash flow + DSCR + turnover | FCF + leverage + liquidity |
| Stability | Employment / income continuity | Customer + supplier + promoter dependence | Industry + strategy + market position |
| Structure | Standard product policy | Amount + tenor + security | Facility package + covenants + seniority |
| Approval | Automated / refer | Delegated + analyst | Credit authority / committee |

### RBI-registered credit information companies

| Credit information company | Retail use | Commercial use |
|---|---|---|
| TransUnion CIBIL | Credit report + score products | Borrower / promoter history |
| Experian | Credit report + score products | Borrower / promoter history |
| Equifax | Credit report + score products | Borrower / promoter history |
| CRIF High Mark | Credit report + score products | Borrower / promoter history |

```text
Identity + bureau tradelines
→ repayment history
→ utilisation + balances
→ enquiries + new credit
→ bureau report / bureau score
→ lender application score + policy
→ affordability / eligibility
→ approve / refer / decline
```

### Never confuse

```text
Bureau score ≠ Lender application score
Lender application score ≠ Internal rating
Internal rating ≠ Approval decision
```

### Underwriting decision table

| Condition | Credit response |
|---|---|
| Sustainable repayment + acceptable risk + workable structure | Approve within authority |
| Sustainable repayment + structure weakness | Restructure terms before approval |
| Marginal evidence + resolvable uncertainty | Refer / obtain evidence |
| Unsustainable repayment | Decline regardless of collateral surplus |

## 9. Profit does not service debt — cash does

Profitability is an accounting starting point. Debt service depends on cash remaining after interest, tax, working-capital absorption and capital expenditure. A profitable borrower can therefore become more dependent on bank funding when receivables or inventory absorb cash faster than earnings replenish it.

```text
Free Cash Flow = EBITDA − Cash Interest − Cash Tax − Working-Capital Investment − Capex

EBITDA   operating earnings before interest, tax, depreciation and amortisation
CI       cash interest
CT       cash tax
WCI      cash absorbed by working-capital investment
Capex    cash capital expenditure
FCF      free cash flow after these cash uses

Worked
EBITDA   ₹6.00 crore
CI       ₹0.90 crore
CT       ₹0.60 crore
WCI      ₹2.40 crore
Capex    ₹0.90 crore

₹6.00 crore − ₹0.90 crore − ₹0.60 crore − ₹2.40 crore − ₹0.90 crore = ₹1.20 crore
```

| Accounting signal | Credit translation |
|---|---|
| Revenue growth | Scale + demand |
| EBITDA | Operating earning capacity |
| EBITDA margin | Operating resilience |
| Profit after tax | Equity accounting outcome |
| Receivable build | Cash trapped with customers |
| Inventory build | Cash trapped in stock |
| Payable stretch | Supplier financing / stress |
| Capex | Cash absorbed before debt service |
| Free cash flow | Cash available after operating needs |

```text
Profit ↑
+ receivables ↑↑
+ inventory ↑↑
→ cash conversion weakens
→ debt dependence can rise
```

### Never confuse

```text
Revenue ≠ Cash collection
EBITDA ≠ Cash flow
Profit ≠ Free cash flow
Cash balance ≠ Recurring repayment capacity
```

## 10. Ratios answer different credit questions

| Metric | Measures | Main failure mode |
|---|---|---|
| Revenue growth | Sales direction | Growth without cash conversion |
| Gross margin | Pricing + direct cost | Mix and accounting effects |
| EBITDA margin | Operating profitability | Ignores capex + working capital |
| Debt / EBITDA | Gross leverage | Weak for volatile EBITDA |
| Net debt / EBITDA | Leverage after liquidity | Cash may be trapped / restricted |
| Interest coverage | Interest service | Ignores principal |
| DSCR | Principal + interest service | Definition varies by policy |
| Current ratio | Near-term balance-sheet liquidity | Asset quality ignored |
| Receivable days | Collection speed | Seasonality / tax effects |
| Inventory days | Stock holding | Obsolescence hidden |
| Payable days | Supplier credit | Stretch may signal stress |
| Cash conversion cycle | Working-capital duration | Sector comparison required |
| LTV | Collateral leverage | Valuation basis dominates |
| Facility utilisation | Liquidity usage | Limit may exceed drawing power |
| Collateral coverage | Recovery cushion | Enforceability + costs ignored |
| Recovery rate | Realised recovery | Timing ignored |
| Expected loss rate | Average loss fraction | EAD omitted |
| Capital ratio | Prudential capitalisation | Not a liquidity measure |

The worked ratio set below illustrates mechanics only. It is not additional Shakti spine-case data. A ratio is interpreted only after the numerator, denominator, observation date and comparison basis are fixed; the same numeric value can carry different meaning across sectors and facility structures.

```text
Revenue Growth = (Current Revenue − Prior Revenue) / Prior Revenue

CR    current-period revenue
PR    prior-period revenue
RG    revenue growth

Worked
CR    ₹24.00 crore
PR    ₹20.00 crore

(₹24.00 crore − ₹20.00 crore) / ₹20.00 crore = 20.0%
```

```text
Gross Margin = Gross Profit / Revenue

GP    gross profit
R     revenue
GM    gross margin

Worked
GP    ₹7.20 crore
R     ₹24.00 crore

₹7.20 crore / ₹24.00 crore = 30.0%
```

```text
EBITDA Margin = EBITDA / Revenue

EBITDA   operating earnings before interest, tax, depreciation and amortisation
R        revenue
EM       EBITDA margin

Worked
EBITDA   ₹3.60 crore
R        ₹24.00 crore

₹3.60 crore / ₹24.00 crore = 15.0%
```

```text
Debt / EBITDA = Gross Debt / EBITDA

D        gross interest-bearing debt
EBITDA   operating earnings before interest, tax, depreciation and amortisation
DE       gross leverage multiple

Worked
D        ₹9.00 crore
EBITDA   ₹3.60 crore

₹9.00 crore / ₹3.60 crore = 2.50x
```

```text
Net Debt / EBITDA = (Gross Debt − Usable Cash) / EBITDA

D        gross interest-bearing debt
C        usable cash
EBITDA   operating earnings before interest, tax, depreciation and amortisation
NDE      net leverage multiple

Worked
D        ₹9.00 crore
C        ₹1.00 crore
EBITDA   ₹3.60 crore

(₹9.00 crore − ₹1.00 crore) / ₹3.60 crore = 2.22x
```

```text
Interest Coverage = EBITDA / Cash Interest

EBITDA   operating earnings before interest, tax, depreciation and amortisation
I        cash interest expense
IC       interest coverage multiple

Worked
EBITDA   ₹3.60 crore
I        ₹0.90 crore

₹3.60 crore / ₹0.90 crore = 4.00x
```

```text
DSCR = Cash Available for Debt Service / Debt Service

CADS   cash available for debt service under the stated definition
DS     principal + interest debt service under the stated definition
DSCR   debt-service coverage ratio

Worked
CADS   ₹2.70 crore
DS     ₹1.80 crore

₹2.70 crore / ₹1.80 crore = 1.50x
```

```text
Current Ratio = Current Assets / Current Liabilities

CA    current assets
CL    current liabilities
CR    current ratio

Worked
CA    ₹12.00 crore
CL    ₹8.00 crore

₹12.00 crore / ₹8.00 crore = 1.50x
```

```text
Receivable Days = Receivables / Revenue x 365

AR    trade receivables
R     annual revenue
RD    receivable days

Worked
AR    ₹4.80 crore
R     ₹24.00 crore

₹4.80 crore / ₹24.00 crore x 365 = 73.0 days
```

```text
Inventory Days = Inventory / COGS x 365

INV   inventory
COGS  annual cost of goods sold
ID    inventory days

Worked
INV   ₹6.00 crore
COGS  ₹18.00 crore

₹6.00 crore / ₹18.00 crore x 365 = 121.7 days
```

```text
Payable Days = Payables / COGS x 365

AP    trade payables
COGS  annual cost of goods sold
PD    payable days

Worked
AP    ₹3.00 crore
COGS  ₹18.00 crore

₹3.00 crore / ₹18.00 crore x 365 = 60.8 days
```

```text
Cash Conversion Cycle = Receivable Days + Inventory Days − Payable Days

RD    receivable days
ID    inventory days
PD    payable days
CCC   cash conversion cycle

Worked
RD    73.0 days
ID    121.7 days
PD    60.8 days

73.0 + 121.7 − 60.8 = 133.9 days
```

```text
Ratio selected
→ definitions fixed
→ observation date fixed
→ history and peers compared
→ covenant / policy context applied
→ credit meaning judged
```

## 11. Facility structure allocates credit risk

Structure translates the cash-flow assessment into contractual controls. Amount and tenor determine how much repayment pressure is created; amortisation decides how quickly exposure falls; limits and drawing power govern revolving availability; covenants and conditions create intervention points before outright payment failure.

| Structure lever | Credit effect | Failure signal |
|---|---|---|
| Amount | Maximum funded need | Over-sizing |
| Tenor | Time allowed for repayment | Maturity beyond cash visibility |
| Amortisation | Speed of exposure reduction | Back-ended repayment |
| Limit | Revolving capacity | Persistent high utilisation |
| Drawing power | Asset-backed availability | Stale / weak stock statements |
| Covenant | Early control point | Breach / waiver cycle |
| Security | Recovery position | Perfection / valuation gap |
| Guarantee | Additional payer | Weak guarantor / legal limitation |
| Conditions precedent | Before first draw | Unmet control gate |
| Conditions subsequent | Post-disbursement obligation | Documentation drift |
| Pricing | Return for risk + capital | Price not cure for bad credit |

### Facility structure decision table

| Cash-flow pattern | Structure response |
|---|---|
| Predictable recurring surplus | Amortising term debt |
| Seasonal operating cycle | Working-capital line |
| Short receivable cycle | Invoice / bill finance |
| Construction then operation | Project draw schedule + sculpted repayment |
| Contingent contractual obligation | LC / guarantee |
| Refinancing-only repayment | High maturity risk + stronger controls |

For Shakti Components, the ₹8.00 crore cash-credit sanction is a revolving envelope rather than a promise that the full amount is always drawable. Opening drawing power is ₹6.50 crore and opening draw is ₹5.80 crore; the quantitative relationship is carried with the exposure mechanics.

## 12. Collateral changes recovery more directly than default probability

Collateral analysis asks what value remains available after valuation uncertainty, enforcement delay, costs and priority claims. The appraisal number is therefore only an input. Recovery depends on the realisable value of an asset the bank can actually reach and realise.

| Collateral class | Examples | Value basis | Main failure mode | Main LGD effect |
|---|---|---|---|---|
| Cash / deposits | Bank deposit + cash margin | Encashable amount | Set-off / lien defects | High recovery certainty |
| Sovereign / marketable security | Government security + eligible securities | Market value less haircut | Market movement | Fast realisation if perfected |
| Receivables | Trade debtors | Eligible receivable value | Dispute + dilution + ageing | Collection-dependent |
| Inventory | Raw material + WIP + finished goods | Eligible stock value | Obsolescence + shrinkage | Forced-sale discount |
| Warehouse receipt / commodity | Stored commodity | Market value | Quality + custody | Commodity volatility |
| Plant / machinery | Fixed equipment | Realisable value | Specialised-use discount | Sale-cost heavy |
| Vehicle | Commercial / personal vehicle | Market value | Depreciation + damage | Product-dependent |
| Immovable property | Residential / commercial / industrial | Realisable property value | Title + liquidity + time | Often material recovery source |
| Gold jewellery | Pledged gold ornaments | Eligible gold value | Price + purity + auction | High liquidity if controlled |
| Life policy / specified instrument | Assignable policy / instrument | Surrender / encashment value | Assignment defect | Contract-value recovery |
| Project assets | Plant + concession-linked assets | Project realisable value | Completion + legal rights | Going-concern sensitive |
| Intangible rights | Licence + concession + contractual right | Case-specific | Enforceability + transferability | Limited tangible-security recognition |

### Credit-support census

| Support | Risk role | Main dependency |
|---|---|---|
| Personal guarantee | Additional individual payer | Net worth + enforceability |
| Corporate guarantee | Additional corporate payer | Guarantor credit quality |
| Central / State support | Public-sector support | Exact guarantee terms |
| Eligible guarantee scheme | Covered loss support | Scheme eligibility + claim conditions |
| Cash margin | Immediate funded cushion | Control and availability |
| Letter of comfort | Behavioural / contractual support | Wording + legal effect |

```text
LTV = Loan Amount / Collateral Value

L       loan amount under the stated measure
CV      collateral value under the stated valuation basis
LTV     loan-to-value ratio

Worked
L       ₹6.00 crore
CV      ₹8.00 crore

₹6.00 crore / ₹8.00 crore = 75.0%
```

```text
Collateral Coverage = Realisable Collateral / Exposure

RC      realisable collateral value
E       exposure under the stated measure
CC      collateral coverage ratio

Worked
RC      ₹4.50 crore
E       ₹6.00 crore

₹4.50 crore / ₹6.00 crore = 75.0%
```

LTV and collateral coverage look at the same economic cushion from opposite directions, but neither is LGD. LGD also reflects priority, recovery costs, time and any value obtained from other recovery sources.

### Permanent trap

```text
High collateral value ≠ Strong borrower
Low LTV ≠ Low PD
Collateral coverage ≠ Enforceable recovery
```

## 13. Security value without enforceable security is incomplete protection

Collateral value and enforceable security answer different questions. The first is economic: what could the asset be worth on recovery? The second is legal and operational: does the lender have a valid, perfected and maintainable route to that value?

A practitioner therefore weighs ownership, authority to encumber, correct creation of the security interest, registration or notice where required, document control, priority against competing claims and continuing compliance after disbursement. A large valuation cannot compensate for a defect that prevents or delays access to the asset.

| Security-interest / charge type | Asset / right | Possession | Creation logic | Main perfection issue |
|---|---|---|---|---|
| Lien | Deposit / property in control | Usually creditor control | Right to retain | Contract + control |
| Pledge | Movable goods / securities | Creditor / bailee possession | Delivery + pledge agreement | Possession + identification |
| Hypothecation | Movable assets | Borrower possession | Charge without delivery | Documentation + registration where applicable |
| Assignment | Receivable / policy / contractual right | Right transferred | Assignment instrument | Notice + transfer restrictions |
| Simple mortgage | Immovable property | Borrower possession | Personal covenant + property charge | Instrument + registration |
| Mortgage by conditional sale | Immovable property | Usually borrower | Ostensible sale subject to condition | Form + registration |
| Usufructuary mortgage | Immovable property | Mortgagee possession | Rents / profits toward debt | Possession + terms |
| English mortgage | Immovable property | Absolute transfer subject to re-transfer | Transfer + repayment covenant | Instrument + registration |
| Mortgage by deposit of title deeds | Immovable property | Title deeds deposited | Intent to create security | Deposit + evidence + local law requirements |
| Anomalous mortgage | Immovable property | Mixed | Contractual combination | Exact terms |
| Fixed charge | Specific asset | Borrower often retains use | Identified asset charge | Registration + restrictions |
| Floating charge | Changing asset pool | Borrower use until crystallisation | Floating security | Crystallisation + priority |

```text
Asset exists
→ borrower owns / can encumber
→ security created
→ required registration / notice completed
→ priority established
→ documents controlled
→ enforceability maintained
```

### Never confuse

```text
Collateral ≠ Charge
Ownership ≠ Enforceable security
Sanction condition ≠ Perfection
Guarantee ≠ Collateral
Negative lien ≠ Security interest
```

## 14. First charge, pari passu and second charge are different recovery positions

| Priority position | Meaning | Recovery implication | Main risk |
|---|---|---|---|
| Exclusive first charge | Sole first-ranking claim | First access to charged value | Prior hidden claim / perfection defect |
| Pari passu first charge | Shared first rank | Pro-rata sharing among first-rank lenders | Inter-creditor mechanics |
| Second charge | Ranks after first charge | Residual value only | Thin residual cushion |
| Subsequent charge | Lower contractual rank | Further residual value | Multiple prior claims |
| Contractual subordination | Payment priority ceded | Junior recovery | Standstill / enforcement terms |
| Unsecured | No specific charged asset | General creditor recovery | Low recovery certainty |

```text
Value Available to Current Rank = Gross Asset Value − Enforcement Costs − Prior-Ranking Claims

GAV    gross realisable asset value
EC     enforcement and realisation costs
PRC    claims ranking ahead of the current lender
VACR   value available to the current rank

Worked
GAV    ₹6.00 crore
EC     ₹0.60 crore
PRC    ₹2.40 crore

₹6.00 crore − ₹0.60 crore − ₹2.40 crore = ₹3.00 crore
```

Priority changes which lender reaches the recovery pool first. Two facilities can therefore share the same property valuation yet have different recovery expectations because one sits behind prior claims or shares first rank with other lenders.

```text
Value
→ validity
→ perfection
→ priority
→ enforceability
→ net recovery
```

## 15. Sanction limit, drawing power, outstanding and EAD are not substitutes

Drawing power answers how much of the sanctioned revolving line is currently supported by the eligible borrowing base. Sanction remains the contractual ceiling; the borrower cannot infer current availability from sanction alone.

| Spine-case point | Amount | Credit meaning |
|---|---:|---|
| Sanctioned cash-credit limit | ₹8.00 crore | Contractual maximum |
| Opening drawing power | ₹6.50 crore | Eligible current-asset borrowing base |
| Opening outstanding | ₹5.80 crore | Funded draw |
| Undrawn to sanction | ₹2.20 crore | Remaining contractual capacity |
| Stressed drawing power | ₹5.20 crore | Reduced eligible borrowing base |
| Stressed outstanding | ₹5.90 crore | Funded exposure after stress draw |
| Excess over drawing power | ₹0.70 crore | Irregular amount |

```text
Drawing Power = Min(Sanctioned Limit, Eligible Borrowing Base)

SL    sanctioned contractual ceiling
EBB   eligible borrowing base after applicable margins and exclusions
DP    drawing power

Worked
SL    ₹8.00 crore
EBB   ₹6.50 crore

Min(₹8.00 crore, ₹6.50 crore) = ₹6.50 crore
```

```text
Utilisation = Drawn Amount / Operative Limit

D     drawn funded amount
OL    operative facility limit used for the ratio
U     utilisation rate

Worked
D     ₹5.80 crore
OL    ₹8.00 crore

₹5.80 crore / ₹8.00 crore = 72.5%
```

```text
Undrawn Amount = Sanctioned Limit − Drawn Amount

SL    sanctioned contractual ceiling
D     drawn funded amount
UD    undrawn amount to sanction

Worked
SL    ₹8.00 crore
D     ₹5.80 crore

₹8.00 crore − ₹5.80 crore = ₹2.20 crore
```

```text
Excess over Drawing Power = Max(Outstanding − Drawing Power, 0)

O     funded outstanding
DP    drawing power
EX    amount above drawing power

Worked
O     ₹5.90 crore
DP    ₹5.20 crore

Max(₹5.90 crore − ₹5.20 crore, 0) = ₹0.70 crore
```

```text
₹8.00 crore sanction
→ ₹6.50 crore opening drawing power
→ ₹5.80 crore draw
→ stock / receivables weaken
→ ₹5.20 crore drawing power
→ ₹5.90 crore outstanding
→ ₹0.70 crore continuous excess
```

### Never confuse

```text
Sanction ≠ Availability
Availability ≠ Drawing power surplus
Outstanding ≠ EAD
Irregular amount ≠ Total exposure
```

## 16. Monitoring searches for deterioration before contractual failure

Monitoring works because contractual default is a late signal. The useful question is whether repayment capacity, willingness, liquidity or recovery quality is weakening before the payment clock reaches a terminal state. Different signals therefore point to different responses rather than one mechanical escalation rule.

| Signal family | Examples | Interpretation | Response |
|---|---|---|---|
| Payment conduct | DPD + missed instalment | Contract stress | Collections / escalation |
| Limit conduct | Persistent high utilisation + excess | Liquidity stress | Review drawing power / limit |
| Account turnover | Falling credits | Weak cash generation | Cash-flow review |
| Financial | Leverage ↑ + coverage ↓ | Debt capacity weakening | Rating review |
| Working capital | Receivable days ↑ + inventory days ↑ | Cash conversion weakening | Borrowing-base review |
| Covenant | Breach / repeated waiver | Structural stress | Escalation / amendment review |
| Bureau / CIC | New debt + delinquency | External leverage / conduct | Re-underwrite |
| External rating | Downgrade / watch | Market / agency signal | Risk-weight + credit review |
| Sector | Demand / price shock | Common-factor risk | Sector overlay / limit review |
| Security | Value erosion / documentation lapse | LGD worsening | Revaluation / perfection action |
| Management | Auditor / promoter / governance event | Execution and integrity risk | Escalation |

### CRILC monitoring apparatus

```text
Aggregate exposure with lender ≥ ₹5 crore
→ credit information + SMA reported to CRILC
→ CRILC-Main monthly
→ default instances weekly
→ Friday close
→ preceding working day if Friday holiday
```

Shakti exceeds the ₹5 crore CRILC exposure threshold. As its drawing power falls while outstanding remains above drawing power, the same deterioration that drives internal monitoring also enters the regulatory reporting apparatus.

## 17. Arrears, DPD and SMA run escalation clocks

| Credit form | State | Trigger |
|---|---|---|
| Term / instalment | SMA-0 | Amount overdue 1–30 days |
| Term / instalment | SMA-1 | Amount overdue 31–60 days |
| Term / instalment | SMA-2 | Amount overdue 61–90 days |
| Cash credit / overdraft | SMA-1 | Continuous excess over sanction / drawing power >30 and up to 60 days |
| Cash credit / overdraft | SMA-2 | Continuous excess over sanction / drawing power >60 and up to 90 days |
| Cash credit / overdraft | Out of order | RBI out-of-order condition for 90 days |
| Term / instalment | NPA | Interest / principal overdue >90 days |

```text
Due date missed
→ Overdue
→ SMA-0        1–30 DPD
→ SMA-1        31–60 DPD
→ SMA-2        61–90 DPD
→ NPA          >90 DPD
```

```text
CC / OD
→ outstanding continuously above sanctioned limit / drawing power
→ SMA-1        >30 to 60 days
→ SMA-2        >60 to 90 days
→ out of order 90 days
→ NPA
```

RBI out-of-order also captures no credits continuously for the prescribed period, or credits insufficient to cover interest debited during the prescribed previous period.

### Spine case

```text
₹5.90 crore outstanding
> ₹5.20 crore drawing power
→ excess ₹0.70 crore
→ >30 days  SMA-1
→ >60 days  SMA-2
→ 90-day out-of-order condition completed
→ NPA
```

### Never confuse

```text
Overdue ≠ SMA
SMA ≠ NPA
SMA-2 ≠ Default by definition
DPD ≠ Arrears amount
```

## 18. Default, NPA and credit-impaired are different regimes

The regimes can converge on the same distressed borrower without becoming the same definition. Contractual default asks whether a due obligation has not been paid. RBI NPA applies a prudential overdue or out-of-order test. Internal default and credit-impaired status use their own governed purposes and evidence.

| Regime | Trigger basis | Unit | Main use |
|---|---|---|---|
| Contractual / resolution default | Debt due and payable but unpaid | Debt / borrower | Stress recognition + resolution |
| RBI NPA | IRACP overdue / out-of-order rule | Borrower-linked asset classification | Income recognition + provisioning |
| Internal default | Bank-governed default definition | Obligor / facility by policy | Rating + PD + collections |
| Credit-impaired | Ind AS 109 accounting evidence | Financial asset | ECL measurement for Ind AS reporters |

Shakti completes the cash-credit out-of-order condition after continuous irregularity. That event places the account in RBI NPA classification and starts the substandard period; it does not by itself define every other default or accounting state.

### Never confuse

```text
Default ≠ NPA
NPA ≠ Credit-impaired
SMA-2 ≠ Stage 2
NPA ≠ Write-off
Default ≠ 100% loss
```

## 19. Standard, substandard, doubtful and loss are prudential states

### RBI asset-classification census

| State | Classification basis | Recovery view | Next state |
|---|---|---|---|
| Standard | Performing under IRACP | Normal collection | SMA / NPA if stress persists |
| Substandard | NPA for ≤12 months | Defined credit weakness | Doubtful after prescribed ageing |
| Doubtful | Remained substandard for 12 months | Full collection highly questionable | Ageing bands / loss |
| Loss | Identified uncollectible amount not wholly written off | Salvage only | Write-off / full provision |

### RBI provisioning census — base classification rates

| Classification / category | Secured | Unsecured |
|---|---:|---:|
| Standard — farm credit | 0.25% | 0.25% |
| Standard — individual housing | 0.25% | 0.25% |
| Standard — Small + Micro | 0.25% | 0.25% |
| Standard — Medium | 0.40% | 0.40% |
| Standard — CRE | 1.00% | 1.00% |
| Standard — CRE-RH | 0.75% | 0.75% |
| Standard — other | 0.40% | 0.40% |
| Standard — teaser housing | 2.00% | 2.00% |
| Standard — teaser post-reset | 0.40% | 0.40% |
| Standard — natural-calamity restructured | 5.00% | 5.00% |
| Standard — other restructured | Resolution directions | Resolution directions |
| Substandard — general | 15% | 25% |
| Substandard — qualifying infrastructure | 15% | 20% total |
| Substandard — lease | 15% | 25% |
| Doubtful — uncovered portion | — | 100% |
| Doubtful — secured ≤1 year | 25% | — |
| Doubtful — secured >1 to 3 years | 40% | — |
| Doubtful — secured >3 years | 100% | — |
| Loss retained | 100% | 100% |

### Standard-asset special overlays carried in IRACP

| Situation | Provision / trigger |
|---|---|
| Project finance — CRE construction phase | 1.25% |
| Project finance — CRE-RH construction phase | 1.00% |
| Project finance — other construction phase | 1.00% |
| Project finance — operational CRE | 1.00% |
| Project finance — operational CRE-RH | 0.75% |
| Project finance — operational other | 0.40% |
| UFCE likely loss / EBID up to 15% | 0 bps incremental |
| UFCE >15% to 30% | 20 bps incremental |
| UFCE >30% to 50% | 40 bps incremental |
| UFCE >50% to 75% | 60 bps incremental |
| UFCE >75% | 80 bps incremental |

Provisioning converts a classification state into a prudential loss charge. The rate does not estimate PD: it follows the regulatory classification, category, security treatment and ageing rules. Doubtful assets require the secured and uncovered portions to be separated because the two portions carry different prescribed treatment.

```text
Substandard Provision = Exposure x Provision Rate

E       exposure subject to the stated substandard rate
PR      prescribed provision rate for that exposure category
PROV    resulting provision

Worked
E       ₹6.00 crore
PR      15%

₹6.00 crore x 15% = ₹0.90 crore = ₹90 lakh
```

```text
Unsecured Portion = Max(Exposure − Realisable Security, 0)

E     exposure under the provisioning calculation
RS    realisable security recognised for the calculation
UP    unsecured / uncovered portion

Worked
E     ₹6.00 crore
RS    ₹3.60 crore

Max(₹6.00 crore − ₹3.60 crore, 0) = ₹2.40 crore
```

```text
Secured Provision = Secured Portion x Secured Provision Rate

SP      secured portion subject to the stated rate
SPR     secured provision rate
SPROV   provision on secured portion

Worked
SP      ₹3.60 crore
SPR     25%

₹3.60 crore x 25% = ₹0.90 crore
```

```text
Unsecured Provision = Unsecured Portion x Unsecured Provision Rate

UP      unsecured / uncovered portion
UPR     unsecured provision rate
UPROV   provision on unsecured portion

Worked
UP      ₹2.40 crore
UPR     100%

₹2.40 crore x 100% = ₹2.40 crore
```

```text
Total Provision = Secured Provision + Unsecured Provision

SPROV   provision on secured portion
UPROV   provision on unsecured portion
TPROV   total provision

Worked
SPROV   ₹0.90 crore
UPROV   ₹2.40 crore

₹0.90 crore + ₹2.40 crore = ₹3.30 crore
```

```text
Security realisable value < 50% of last assessed / accepted value
→ significant erosion
→ NPA may move straight to doubtful

Security realisable value < 10% of outstanding
→ security ignored
→ straight to loss asset
```

### Spine case

At first NPA classification, Shakti has ₹6.00 crore outstanding, remains substandard and carries ₹4.50 crore realisable security. The spine-case provision is ₹0.90 crore, or ₹90 lakh, on the stated 15% basis above.

After more than 12 months as NPA, the account becomes doubtful. Realisable security has fallen to ₹3.60 crore, leaving ₹2.40 crore uncovered; the first doubtful-year rates produce ₹0.90 crore on the secured portion and ₹2.40 crore on the uncovered portion, for ₹3.30 crore total provision.

## 20. Cure, upgrade, regularisation and restructuring are different transitions

Regularisation answers a narrow conduct question: is the present irregularity gone? Cure is an internal governed judgement about whether the borrower has returned to an acceptable credit state. NPA upgrade is a prudential classification transition and therefore follows the RBI upgrade condition rather than a bank's internal cure label.

The distinction matters because partial payment can improve current conduct without reversing the prudential state. A practitioner weighs whether the payment removes the entire relevant arrears, whether other facilities with the bank remain irregular, whether repayment capacity has actually stabilised, and whether a restructuring has changed the contractual path rather than restored the original one.

| Transition | Meaning | RBI / credit consequence |
|---|---|---|
| Regularisation | Current irregularity removed | May stop further delinquency escalation |
| Cure | Internal default / watch state returns to acceptable policy state | Governed internal transition |
| NPA upgrade | Entire arrears of interest + principal paid | Standard only after RBI condition met |
| Multi-facility upgrade | Entire arrears across all facilities with bank paid | Borrower-wide upgrade condition |
| Restructuring | Contract terms changed for stress / viability | Separate resolution treatment |
| Technical write-off | Accounting removal from branch / books treatment | Recovery claim can remain |

```text
NPA account
        ├─ partial arrears paid → remains NPA
        └─ entire arrears across facilities paid
                              ↓
                     eligible for upgrade
```

### Never confuse

```text
Regularisation ≠ Cure
Cure ≠ NPA upgrade
NPA upgrade ≠ Restructuring
Restructuring ≠ Waiver
Technical write-off ≠ Forgiveness
```

## 21. PD measures likelihood — not loss

| PD element | Required question |
|---|---|
| Borrower / obligor | Who can default |
| Horizon | Over what period |
| Default definition | What event counts |
| Observation date | Risk as of when |
| Calibration | PIT / TTC / accounting / capital context |
| Model / rating | How risk is estimated |

PD is a probability attached to a defined borrower, horizon, default definition and observation date. Without those coordinates, the percentage cannot be interpreted or compared.

```text
Borrower evidence
→ score / rating factors
→ grade
→ calibrated PD
```

PIT PD is more sensitive to current conditions; TTC PD is smoother through the cycle. The labels therefore describe calibration context, not a different loss dimension.

Shakti's illustrative internal one-year PD is 5.0%. It is a bank estimate for the spine case, not the RBI NPA status, an external rating or a regulatory risk weight.

### Never confuse

```text
PD ≠ Loss rate
PD ≠ Risk weight
PD ≠ NPA ratio
Low PD ≠ Low LGD
```

## 22. LGD measures severity after default

LGD asks how much of exposure is not recovered after default on the model's stated basis. The estimate therefore depends on recovery sources and waterfall position, but also on how recoveries are valued after costs and timing effects.

```text
Simple LGD = 1 − Net Recovery Rate

NRR   net recovery rate on the same exposure and valuation basis
LGD   simple loss-given-default rate on that basis

Worked
NRR   60.0%

1 − 60.0% = 40.0%
```

| LGD driver | Lower-loss tendency | Higher-loss tendency |
|---|---|---|
| Seniority | First-ranking | Subordinated / unsecured |
| Collateral | Liquid + enforceable | Illiquid + disputed |
| Valuation | Conservative realisable value | Stale appraisal |
| Guarantee | Strong + callable | Weak / conditional |
| Recovery time | Short | Long |
| Costs | Low | High |
| Jurisdiction / process | Predictable enforcement | Delayed / contested enforcement |

Shakti's illustrative internal LGD is 40.0%, paired with a simple 60.0% model recovery assumption. It is a pre-default estimate; the realised loss rate can differ once actual collections, enforcement costs and timing are known.

### Never confuse

```text
LGD ≠ LTV
LGD ≠ Provision rate
Appraised value ≠ Net recovery value
Guarantee amount ≠ Cash recovered
```

## 23. EAD measures exposure at the default point

```text
EAD = Drawn Amount + CCF x Undrawn Amount

D      drawn funded amount at observation
CCF    conversion factor applied to undrawn amount
UD     undrawn available amount before default
EAD    exposure at default

Worked
D      ₹5.80 crore
CCF    25%
UD     ₹2.20 crore

₹5.80 crore + 25% x ₹2.20 crore = ₹6.35 crore
```

For an amortising facility, EAD follows the projected balance path. For a revolving facility, current drawn exposure is incomplete because the borrower can use remaining commitment before default. The conversion factor captures that additional draw assumption.

The 25% CCF is an illustrative internal modelling assumption for the spine case, not an RBI regulatory CCF.

### Never confuse

```text
Current balance ≠ EAD
Limit ≠ EAD
CCF ≠ PD
Undrawn amount ≠ Zero exposure
```

## 24. Expected loss combines different dimensions

### Credit-parameter census

| Parameter | Form | Credit use |
|---|---|---|
| Score | Numeric model output | Rank risk |
| Grade | Ordered risk bucket | Policy + monitoring |
| Internal rating | Bank-assigned credit assessment | Underwriting + portfolio management |
| PD | Probability | Default likelihood |
| LGD | Loss fraction | Default severity |
| EAD | Currency exposure | Default-point exposure |
| CCF | Conversion factor | Undrawn-to-exposure conversion |
| Recovery rate | Realised recovery fraction | Workout outcome |
| Expected loss rate | Loss fraction | Average expected credit cost |

Expected loss combines frequency, severity and exposure size. PD cannot substitute for LGD, and neither says how much money is at risk; the product becomes economically meaningful only when all three dimensions are on compatible definitions and horizons.

```text
Expected Loss Rate = PD x LGD

PD    probability of default over the stated horizon
LGD   loss given default as fraction of exposure
ELR   expected loss rate

Worked
PD    5.0%
LGD   40.0%

5.0% x 40.0% = 2.0%
```

```text
Expected Loss Amount = PD x LGD x EAD

PD    probability of default over the stated horizon
LGD   loss given default as fraction of exposure
EAD   exposure at default
ELA   expected loss amount

Worked
PD    5.0%
LGD   40.0%
EAD   ₹6.35 crore

5.0% x 40.0% x ₹6.35 crore = ₹0.127 crore = ₹12.70 lakh
```

The spine case therefore has a 2.0% expected loss rate and ₹12.70 lakh expected loss amount. These are modelling outputs, not the RBI prudential provision and not the realised loss after workout.

### Permanent trap

```text
Expected loss ≠ RBI provision
Expected loss ≠ Realised loss
Expected loss ≠ RWA
Expected loss ≠ Capital requirement
```

## 25. Score, grade, rating and PD form a chain — not synonyms

```text
Inputs
→ model score
→ internal grade
→ calibrated PD
→ decision / monitoring use
```

A score is a numeric model output. A grade groups scores into ordered risk buckets, an internal rating is the bank's governed credit assessment, and PD attaches a probability estimate to a defined default event and horizon. External rating remains a separate ECAI assessment used for its own purposes.

Discrimination asks whether the model orders risk correctly. Calibration asks whether the probabilities attached to that ordering are numerically right. Stability asks whether the relationship continues to hold through time and changing populations. Strong performance on one dimension does not establish the others.

### Never confuse

```text
Score ≠ Grade
Grade ≠ PD
Internal rating ≠ External rating
External rating ≠ Internal PD
Good ranking ≠ Good calibration
```

## 26. Ind AS 109 changes the accounting answer — not the underlying credit event

| Framework | State | Trigger basis | Main output |
|---|---|---|---|
| Ind AS 109 | Stage 1 | Performing without SICR | 12-month ECL |
| Ind AS 109 | Stage 2 | Significant increase in credit risk | Lifetime ECL |
| Ind AS 109 | Stage 3 | Credit-impaired | Lifetime ECL |
| RBI IRACP | Standard | Performing prudential state | Prudential classification + provision |
| RBI IRACP | NPA | Overdue / out-of-order rule | NPA classification + provision |

For the commercial-bank lens, RBI IRACP remains the operative prudential classification and provisioning spine. Ind AS 109 is retained here only to locate the accounting ECL architecture used by Ind AS reporters.

```text
Credit-impaired?
        ├─ Yes → Stage 3
        └─ No
             ↓
        SICR since origination?
                ├─ Yes → Stage 2
                └─ No  → Stage 1
```

RBI IRACP routes overdue and out-of-order behaviour into prudential classification and provisioning. Ind AS 109 routes change in credit risk into an accounting stage and ECL horizon. The same borrower can therefore be described by both frameworks without the labels being interchangeable.

### Never confuse

```text
RBI NPA ≠ Ind AS Stage 3
SMA-2 ≠ Stage 2
RBI provision ≠ ECL
12-month ECL ≠ 12 months of cash loss
```

## 27. Basel changes the prudential capital answer — not the underlying exposure

```text
Exposure
→ regulatory exposure class
→ Standardised Approach treatment
→ eligible external rating where applicable
→ credit risk mitigation
→ risk weight
→ RWA
→ capital ratio
```

Under the Standardised Approach, the regulatory route is external where an eligible ECAI assessment applies. A bank's internal rating still matters for underwriting and portfolio management, but it does not replace the prescribed external-rating mapping used to assign the Standardised Approach risk weight.

### RBI Standardised Approach exposure-class census

| Exposure class | Routing basis |
|---|---|
| Domestic sovereign / RBI-linked sovereign claims | Prescribed sovereign treatment |
| Foreign sovereign / central bank | Sovereign rating + currency conditions |
| Public sector entity | Domestic corporate treatment / foreign PSE mapping |
| Eligible MDB / BIS / IMF | Prescribed multilateral treatment |
| Banks | Bank capital / rating treatment |
| Primary dealers | Corporate-style treatment |
| Corporates + NBFCs | Eligible rating / unrated mapping |
| Regulatory retail | Qualifying retail criteria |
| Residential property | LTV + sanction-date treatment |
| Commercial real estate | CRE / CRE-RH treatment |
| Non-performing assets | Provision + eligible security treatment |
| Specified high-risk categories | Prescribed higher risk weight |
| Other assets | Prescribed residual treatment |
| Off-balance-sheet items | CCF / exposure method + counterparty risk weight |

### Domestic ECAI census — RBI eligible for risk weighting

| Domestic ECAI | Standardised Approach role |
|---|---|
| Acuité Ratings & Research | Eligible external credit assessment |
| Brickwork Ratings India | Eligible external credit assessment |
| CARE Ratings | Eligible external credit assessment |
| CRISIL Ratings | Eligible external credit assessment |
| ICRA | Eligible external credit assessment |
| India Ratings and Research | Eligible external credit assessment |
| INFOMERICS Valuation and Rating | Eligible external credit assessment |

```text
Eligible external rating
→ RBI mapping
→ regulatory risk weight
```

### Long-term domestic rating mapping — corporate / NBFC claims in scope

| External rating category | Standardised risk weight |
|---|---:|
| AAA | 20% |
| AA | 30% |
| A | 50% |
| BBB | 100% |
| BB and below | 150% |
| Unrated — general | 100% |
| Unrated — banking-system exposure >₹200 crore | 150% |
| Previously rated then unrated — banking-system exposure >₹100 crore | 150% |

### Short-term domestic rating mapping

| External rating category | Standardised risk weight |
|---|---:|
| A1+ | 20% |
| A1 | 30% |
| A2 | 50% |
| A3 | 100% |
| A4 / D | 150% |
| Unrated — general | 100% |

### Credit-risk-mitigation census — core recognised forms

| CRM family | Prudential role | Recognition dependency |
|---|---|---|
| Eligible financial collateral | Reduce secured exposure under prescribed method | Eligibility + haircut + control |
| Eligible guarantee | Substitute / reduce protected credit risk as prescribed | Eligible guarantor + direct claim |
| Credit derivative | Protection where eligible | Contract + eligible protection provider |
| Netting where recognised | Reduce net exposure | Enforceable netting arrangement |

```text
RWA = Credit Exposure x Regulatory Risk Weight

CE    credit exposure after the applicable exposure measurement
RW    regulatory risk weight
RWA   risk-weighted assets for the worked simple exposure

Worked
CE    ₹6.00 crore
RW    100%

₹6.00 crore x 100% = ₹6.00 crore RWA
```

```text
Capital Ratio = Eligible Capital / RWA

EC    eligible regulatory capital under the stated ratio
RWA   risk-weighted assets
CR    capital ratio

Worked
EC    ₹0.90 crore
RWA   ₹6.00 crore

₹0.90 crore / ₹6.00 crore = 15.0%
```

### Never confuse

```text
Internal rating ≠ External rating
External rating ≠ Regulatory risk weight
Internal rating ≠ Regulatory risk weight
Exposure ≠ RWA
```

## 28. Single-name risk becomes a regulatory large-exposure problem

```text
Counterparty exposure
→ aggregate eligible exposure value
→ compare with eligible Tier 1 capital
→ identify large exposure
→ test regulatory ceiling
```

Concentration risk asks a different question from standalone borrower PD: how much of the bank's capital can be impaired by one counterparty or a set of counterparties that can fail together. A low-PD name can still create an unacceptable concentration when the exposure is large enough.

The connected-counterparty judgement is therefore economic as well as legal. Common control and economic dependence matter because separate legal entities do not diversify the bank if distress in one is likely to transmit to the others. The practitioner weighs both the size of the aggregate exposure and whether the names represent one underlying risk.

```text
Large Exposure Ratio = Aggregate Exposure / Eligible Tier 1 Capital

AE      aggregate exposure value under the framework
ET1     eligible Tier 1 capital
LER     large-exposure ratio

Worked
AE      ₹0.90 crore
ET1     ₹6.00 crore

₹0.90 crore / ₹6.00 crore = 15.0%
```

| Large-exposure measure | RBI ceiling / trigger | Capital base |
|---|---:|---|
| Large-exposure identification | ≥10% | Eligible Tier 1 capital |
| Single counterparty | ≤20% | Eligible Tier 1 capital |
| Exceptional Board-approved single-counterparty increment | +5% | Eligible Tier 1 capital |
| Single counterparty with exceptional increment | ≤25% | Eligible Tier 1 capital |
| Group of connected counterparties | ≤25% | Eligible Tier 1 capital |

### Never confuse

```text
Single borrower ≠ Connected group
Large exposure threshold ≠ Exposure ceiling
```

```text
Borrower A
+ Borrower B
+ common control / economic dependence
→ connected-counterparty assessment
→ group exposure aggregation
```

### Decision table

| Condition | Outcome |
|---|---|
| Exposure <10% eligible Tier 1 capital | Not a large exposure by threshold |
| Exposure ≥10% | Large-exposure population |
| Single counterparty >20% without exception | General ceiling breach |
| Single counterparty >20% to 25% with valid Board exception | Exceptional permitted band |
| Connected group >25% | Group ceiling breach |

## 29. Stress changes PD, LGD, EAD, loss and capital together

| Stress method | Shock shape | Main use |
|---|---|---|
| Base case | Expected path | Planning anchor |
| Sensitivity | One factor | Driver isolation |
| Scenario | Coherent multi-factor shock | Portfolio impact |
| Severe plausible stress | Material downside | Resilience assessment |
| Reverse stress | Failure point backward | Vulnerability discovery |
| Management-action case | Stress plus credible response | Mitigated outcome |

```text
Macro / sector shock
→ revenue ↓
→ cash conversion weakens
→ PD ↑
→ collateral value ↓
→ LGD ↑
→ revolving drawdown ↑
→ EAD ↑
→ credit loss ↑
```

Credit stress can hit both sides of the capital ratio. Higher provisions and losses pressure earnings and capital, while rating migration or default can increase RWA. The denominator and numerator can therefore move adversely at the same time rather than one simply offsetting the other.

### Never confuse

```text
Stress ≠ Forecast
Sensitivity ≠ Scenario
Expected loss ≠ Stress loss
Management action ≠ Assumed rescue
```

## 30. Credit risk meets liquidity and model risk only at its boundaries

Borrower liquidity stress can become bank liquidity usage before it becomes credit loss. Revolving customers draw committed lines as internal cash buffers disappear, increasing EAD while also creating a bank cash outflow. The credit document stops at that interaction rather than teaching bank liquidity adequacy.

```text
Borrower stress
→ CC / OD / card / RCF drawing ↑
→ EAD ↑
+ bank cash outflow ↑
```

Bank funding stress can run in the opposite direction: tighter refinancing weakens borrower liquidity and can raise PD. That feedback is a credit consequence, not a replacement for the separate liquidity framework.

### Credit-model census

| Model / tool | Credit use | Main output | Primary owner boundary |
|---|---|---|---|
| Application scorecard | Retail origination | Score / decision input | Credit risk / analytics |
| Behavioural scorecard | Retail monitoring | Behaviour risk score | Credit risk / analytics |
| Internal rating model | MSME / corporate | Grade | Credit risk |
| PD model | Loss likelihood | PD | Risk modelling |
| LGD model | Recovery severity | LGD | Risk modelling / recovery data |
| EAD / CCF model | Future exposure | EAD / CCF | Risk modelling |
| ECL model | Ind AS measurement where applicable | ECL | Finance + risk |
| Credit stress model | Scenario loss | Stressed parameters / losses | Enterprise risk / credit risk |

```text
Data + assumptions + methodology + implementation
→ model output
→ credit decision / loss estimate / capital input
```

A model output is evidence inside a governed decision, not the decision itself. Credit judgement still weighs data quality, limitations, overrides and whether the model is being used for the purpose and population for which its output is meaningful.

### Never confuse

```text
Model output ≠ Decision
Monitoring ≠ Validation
Overlay ≠ Permanent repair
Capital ≠ Liquidity
```

## 31. Default starts recovery — it does not determine final loss

### Recovery-outcome census

| Outcome | Mechanism | Economic result |
|---|---|---|
| Cure | Internal return to acceptable state | Performing relationship may resume |
| Regularisation | Arrears / irregularity removed | Current conduct restored |
| Restructuring | Contract terms modified | Viability path changed |
| Collections | Cash pursued from borrower | Direct recovery |
| Guarantee invocation | Support provider called | Additional recovery source |
| Collateral realisation | Secured asset enforced / sold | Asset recovery |
| Compromise settlement | Agreed settlement below / around claim | Cash recovery + concession as applicable |
| Transfer / assignment | Exposure sold where permitted | Recovery via sale proceeds |
| Insolvency / legal recovery | Formal resolution / enforcement | Process-driven recovery |
| Technical write-off | Accounting removal treatment | Recovery effort may continue |
| Final write-off | Amount removed after recovery assessment | Residual book loss recognised |

```text
Default
→ borrower cash collection
→ guarantor support
→ collateral enforcement
→ settlement / restructuring / legal process
→ gross recovery
− enforcement + workout costs
→ net recovery
→ residual loss
```

```text
Net Recovery = Net Collateral Recovery + Other Net Cash Recovery

NCR    net collateral recovery
OCR    other net cash recovery
NR     total net recovery

Worked
NCR    ₹3.60 crore
OCR    ₹0.60 crore

₹3.60 crore + ₹0.60 crore = ₹4.20 crore
```

```text
Recovery Rate = Net Recovery / Defaulted Exposure

NR    total net recovery
DE    defaulted exposure
RR    realised recovery rate

Worked
NR    ₹4.20 crore
DE    ₹6.00 crore

₹4.20 crore / ₹6.00 crore = 70.0%
```

```text
Residual Loss = Defaulted Exposure − Net Recovery

DE    defaulted exposure
NR    total net recovery
RL    residual economic loss

Worked
DE    ₹6.00 crore
NR    ₹4.20 crore

₹6.00 crore − ₹4.20 crore = ₹1.80 crore
```

```text
Loss Rate = Residual Loss / Defaulted Exposure

RL    residual economic loss
DE    defaulted exposure
LR    realised loss rate

Worked
RL    ₹1.80 crore
DE    ₹6.00 crore

₹1.80 crore / ₹6.00 crore = 30.0%
```

Shakti's realised loss rate is 30.0%, while its earlier model LGD was 40.0%. The difference is the point of keeping estimate and outcome separate: workout converts uncertain recovery assumptions into actual cash and value realised.

## 32. Write-off, waiver, settlement and recovery are different outcomes

| Term | What changes | Borrower obligation | Recovery path |
|---|---|---|---|
| Provision | Loss allowance / prudential charge | Debt remains | Recovery continues |
| Technical write-off | Accounting presentation / branch treatment | Claim generally remains | Recovery continues |
| Write-off | Asset removed from books | Legal claim depends on action and terms | Recovery may continue where claim survives |
| Waiver | Creditor relinquishes amount | Obligation reduced / extinguished to waived extent | No recovery on waived amount |
| Compromise settlement | Agreed discharge on negotiated terms | Modified to settlement terms | Settlement proceeds |
| Recovery | Cash / value received | Debt reduced | Realised value |
| Residual loss | Exposure not recovered | Depends on legal closure | Economic loss |

A write-off changes the accounting carrying of an amount; a waiver changes the creditor's claim; a settlement changes the terms on which the claim is discharged; recovery is the value actually collected. These outcomes matter separately because accounting closure, legal rights and economic loss do not occur at the same moment.

### Never confuse

```text
Default ≠ Write-off
Write-off ≠ Waiver
Provision ≠ Write-off
Settlement ≠ Cure
Recovery ≠ Cure
```

### Spine case — complete path

```text
₹8.00 crore sanction
→ ₹6.50 crore opening drawing power
→ ₹5.80 crore opening draw
→ ₹5.20 crore stressed drawing power
→ ₹5.90 crore stressed draw
→ ₹0.70 crore excess
→ SMA-1
→ SMA-2
→ NPA
→ substandard
→ ₹0.90 crore initial NPA provision
→ internal PD 5.0%
→ internal LGD 40.0%
→ internal EAD ₹6.35 crore
→ expected loss ₹12.70 lakh
→ net recovery ₹4.20 crore
→ residual loss ₹1.80 crore
```

## 33. Every operative number belongs in one place

### Credit Risk — Thresholds and Numbers

| Item | Figure |
|---|---:|
| SMA-0 / SMA-1 / SMA-2 term | 1–30 / 31–60 / 61–90 days |
| Term-loan NPA | >90 days |
| CC / OD SMA-1 / SMA-2 | >30–60 / >60–90 days continuous excess |
| CC / OD out-of-order | 90 days |
| CRILC threshold / Main / default | ₹5 crore / monthly / weekly |
| NPA stock audit | ≥₹5 crore / annual |
| NPA property valuation | ≥₹5 crore / once in 3 years |
| Substandard / doubtful entry | ≤12 months NPA / after 12 months substandard |
| Doubtful secured ageing | ≤1 year 25% / >1–3 years 40% / >3 years 100% |
| Security erosion / ignore | <50% prior value / <10% outstanding |
| Standard farm + individual housing + Small + Micro | 0.25% |
| Standard Medium / other | 0.40% |
| Standard CRE / CRE-RH | 1.00% / 0.75% |
| Teaser housing / post-reset | 2.00% / 0.40% after 1 year |
| Natural-calamity restructured standard | 5.00% |
| Project construction CRE / CRE-RH / other | 1.25% / 1.00% / 1.00% |
| Project operational CRE / CRE-RH / other | 1.00% / 0.75% / 0.40% |
| UFCE bands | ≤15% 0 bps / >15–30% 20 / >30–50% 40 / >50–75% 60 / >75% 80 bps |
| Substandard secured / unsecured / qualifying infrastructure | 15% / 25% / 20% |
| Doubtful unsecured / loss retained | 100% / 100% |
| ECAI long-term AAA / AA / A / BBB / BB↓ | 20% / 30% / 50% / 100% / 150% |
| ECAI short-term A1+ / A1 / A2 / A3 / A4-D | 20% / 30% / 50% / 100% / 150% |
| ECAI unrated / >₹200 crore / former-rated >₹100 crore | 100% / 150% / 150% |
| Large exposure / single / Board increment / exceptional / group | ≥10% / ≤20% / +5% / ≤25% / ≤25% of eligible Tier 1 capital |
| Ind AS stages | Stage 1 / Stage 2 / Stage 3 |
| Stage 1 loss horizon | 12-month ECL |
| Ratio day-count | 365 |

### Spine-case numbers

| Spine-case item | Figure |
|---|---:|
| Sanction | ₹8.00 crore |
| Opening DP | ₹6.50 crore |
| Opening draw | ₹5.80 crore |
| Undrawn | ₹2.20 crore |
| Utilisation | 72.5% |
| Stressed DP | ₹5.20 crore |
| Stressed draw | ₹5.90 crore |
| Excess | ₹0.70 crore |
| NPA outstanding | ₹6.00 crore |
| NPA security | ₹4.50 crore |
| Substandard prov | ₹0.90 crore / ₹90 lakh |
| Doubtful security | ₹3.60 crore |
| Doubtful unsecured | ₹2.40 crore |
| Doubtful secured prov | ₹0.90 crore |
| Doubtful unsecured prov | ₹2.40 crore |
| Doubtful total | ₹3.30 crore |
| PD | 5.0% |
| LGD | 40.0% |
| Assumed recovery | 60.0% |
| CCF | 25% |
| EAD | ₹6.35 crore |
| EL rate | 2.0% |
| EL amount | ₹0.127 crore / ₹12.70 lakh |
| Collateral recovery | ₹3.60 crore |
| Other recovery | ₹0.60 crore |
| Net recovery | ₹4.20 crore |
| Recovery rate | 70.0% |
| Residual loss | ₹1.80 crore |
| Loss rate | 30.0% |

```text
Regulatory threshold
≠ accounting presumption
≠ bank policy cutoff
≠ analytical rule of thumb
≠ illustrative worked-case assumption
```

**Framework map**

| Framework | Main question | Key output |
|---|---|---|
| Underwriting | Should credit be granted and on what structure | Approval / decline / terms |
| Credit monitoring | Is repayment risk changing | Rating / watch / escalation |
| RBI IRACP | How is the asset classified and provisioned | Standard / NPA class + provision |
| PD / LGD / EAD | What are likelihood, severity and exposure dimensions | Risk parameters |
| Ind AS 109 | What ECL state applies for an Ind AS reporter | Stage + ECL |
| RBI Basel capital | How does credit exposure become prudential RWA | Risk weight + RWA |
| Large Exposures Framework | Is single-name concentration excessive | Counterparty / group limit |
| Stress testing | What happens under adverse conditions | Stressed loss + capital effect |
| Model governance | Can model outputs be relied on | Controlled model use |
| Workout / recovery | What value can be recovered after failure | Net recovery + residual loss |

**Final never-confuse board**

| Never confuse | Distinction |
|---|---|
| Customer vs borrower | Relationship party vs contractual debtor |
| Borrower vs obligor | Credit recipient vs legal performance unit |
| Obligor vs group | Legal debtor vs connected economic set |
| Product vs facility | Archetype vs specific contract |
| Facility vs account | Contract vs booking record |
| Facility vs exposure | Contract vs amount at risk |
| Sanction vs limit | Approved ceiling vs operative ceiling |
| Limit vs drawing power | Facility ceiling vs eligible borrowing base |
| Drawing power vs balance | Availability basis vs funded use |
| Balance vs EAD | Current use vs default-point exposure |
| Bureau score vs lender score | CIC output vs bank decision model |
| Internal rating vs external rating | Bank view vs ECAI assessment |
| External rating vs risk weight | Assessment grade vs RBI mapping outcome |
| Repayment source vs collateral | Default prevention vs loss mitigation |
| Collateral vs charge | Asset vs legal security interest |
| Appraised value vs realisable value | Valuation opinion vs recovery basis |
| First charge vs pari passu | Sole first rank vs shared first rank |
| Arrears vs DPD | Amount unpaid vs time unpaid |
| DPD vs SMA | Clock vs regulatory stress bucket |
| SMA vs NPA | Early stress state vs prudential NPA state |
| NPA vs default | Prudential classification vs governed credit event |
| NPA vs credit-impaired | RBI state vs Ind AS state |
| Default vs loss | Failure event vs unrecovered value |
| Default vs write-off | Credit event vs accounting removal |
| Cure vs upgrade | Internal transition vs RBI NPA transition |
| PD vs LGD | Likelihood vs severity |
| LGD vs LTV | Loss severity vs collateral leverage |
| EAD vs limit | Default-point exposure vs contractual ceiling |
| EL vs ECL | Generic expected-loss engine vs accounting measurement |
| RBI provision vs ECL | Prudential provisioning vs Ind AS allowance |
| Provision vs capital | Loss recognition vs solvency resource |
| Exposure vs RWA | Amount at risk vs risk-weighted amount |
| Stress vs forecast | Adverse resilience test vs expected path |
| Capital vs liquidity | Loss absorption vs cash availability |
| Model monitoring vs validation | Ongoing performance check vs independent challenge |
| Write-off vs waiver | Accounting removal vs debt forgiveness |
| Settlement vs cure | Negotiated resolution vs return to acceptable credit state |
| Recovery vs cure | Value collection vs credit-state restoration |

**60-second recall**

```text
WHO?
Retail / MSME / Corporate
        ↓
WHAT OWES?
Borrower / Obligor / Group / Facility
        ↓
CAN THEY PAY?
Income / Cash flow / FCF / DSCR / leverage
        ↓
HOW STRUCTURED?
Amount / tenor / limit / drawing power / covenant
        ↓
WHAT PROTECTS DOWNSIDE?
Collateral / guarantee / charge / priority
        ↓
IS RISK WORSENING?
Behaviour / financials / bureau / rating / CRILC
        ↓
HOW LATE?
Overdue → SMA → NPA
        ↓
WHAT PRUDENTIAL STATE?
Standard → Substandard → Doubtful → Loss
        ↓
HOW MUCH PROVISION?
Classification + security + ageing
        ↓
HOW RISKY?
Score → Internal rating → PD
        ↓
IF DEFAULT?
Recovery → LGD
        ↓
HOW MUCH THEN?
Drawn + undrawn conversion → EAD
        ↓
EXPECTED LOSS?
PD x LGD x EAD
        ↓
ACCOUNTING BRIDGE?
Ind AS 109 → Stage / ECL
        ↓
CAPITAL BRIDGE?
External rating where eligible → RBI risk weight → RWA
        ↓
CONCENTRATION?
Large exposure → single / connected-group ceiling
        ↓
WHAT IF STRESS?
PD ↑ + LGD ↑ + EAD ↑ + loss ↑
        ↓
IF FAILURE PERSISTS?
Workout → recovery → write-off / residual loss
```

**What to retain**

Primary repayment source first; collateral second. Borrower risk, facility exposure and recovery severity are separate dimensions.

Customer, obligor, group, facility and exposure are different grains. Drawing power governs working-capital availability; sanction does not guarantee availability.

SMA is early stress; NPA is prudential classification; default is a governed credit event. RBI provisioning follows classification, ageing, security and special category rules.

PD measures likelihood; LGD severity; EAD default-point exposure. Internal rating does not set Standardised Approach risk weight.

Eligible external rating enters RBI mapping before regulatory risk weight. Single-name concentration is measured against eligible Tier 1 capital.

Default starts recovery; it does not fix final loss. Write-off, waiver, settlement, cure and recovery are different outcomes.

**Sources**

| Document | Issuing body | Reference | Date |
|---|---|---|---|
| 01 — Credit Risk — Core End-to-End Masterclass | Primer project source pack | No reference number | Undated |
| Reserve Bank of India (Commercial Banks – Income Recognition, Asset Classification and Provisioning) Directions, 2025 | Reserve Bank of India | RBI/DOR/2025-26/164; DOR.STR.REC.83/21.04.048/2025-26 | 28 November 2025 |
| Reserve Bank of India (Commercial Banks – Resolution of Stressed Assets) Directions, 2025 | Reserve Bank of India | RBI/DOR/2025-26/165; DOR.STR.REC.84/21.04.048/2025-26 | 28 November 2025 |
| Reserve Bank of India (Commercial Banks – Prudential Norms on Capital Adequacy) Directions, 2025 | Reserve Bank of India | RBI/DOR/2025-26/151; DOR.CAP.REC.70/21-01-002/2025-26 | 28 November 2025 |
| Reserve Bank of India (Commercial Banks – Concentration Risk Management) Directions, 2025 | Reserve Bank of India | RBI/DOR/2025-26/158; DOR.CRE.REC.77/07-03-001/2025-26 | 28 November 2025 |
| Reserve Bank of India (Commercial Banks – Credit Information Reporting) Directions, 2025 | Reserve Bank of India | RBI/DOR/2025-26/156; DOR.FIN.REC.No.75/20.16.056/2025-26 | 28 November 2025 |
| Reserve Bank of India (Credit Information Companies) Directions, 2025 | Reserve Bank of India | RBI/DOR/2025-26/378; DOR.FIN.REC.No.297/20.16.056/2025-26 | 28 November 2025 |
| Indian Accounting Standard 109 — Financial Instruments | Ministry of Corporate Affairs | Ind AS 109 | 16 February 2015, as amended |
| Transfer of Property Act, 1882 | Government of India | Act 4 of 1882 | 17 February 1882 |

## Verification log

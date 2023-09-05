// Copyright 2021 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export interface Payment {
  owner: string
  name: string
  createdTime: string
  displayName: string

  // Payment Provider Info
  provider: string
  type: string

  // Product Info
  productName: string
  productDisplayName: string
  detail: string
  tag: string
  currency: string
  price: number
  returnUrl: string

  // Payer Info
  user: string
  personName: string
  personIdCard: string
  personEmail: string
  personPhone: string

  // Invoice Info
  invoiceType: string
  invoiceTitle: string
  invoiceTaxId: string
  invoiceRemark: string
  invoiceUrl: string

  // Order Info
  outOrderId: string
  payUrl: string

  state: string
  message: string
}

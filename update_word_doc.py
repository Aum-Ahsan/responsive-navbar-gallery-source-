import re
import subprocess

with open('generate_word_v5.py', 'r') as f:
    v5 = f.read()

with open('scripts/generate_payment_processes.cjs', 'r') as f:
    js = f.read()

match = re.search(r'const processes = \[([\s\S]*?)\];', js)
if not match:
    print("Could not find processes array")
    exit(1)

js_array = match.group(1)

items = []
for line in js_array.split('\n'):
    line = line.strip()
    if not line: continue
    id_match = re.search(r"id:\s*'(\d+)'", line)
    name_match = re.search(r"name:\s*'([^']+)'", line)
    if id_match and name_match:
        items.append(f'    ("{id_match.group(1)}", "{name_match.group(1)}", "Payment Process Component"),')

py_array = "payment_processes = [\n" + "\n".join(items) + "\n]\n"
py_links = """
payment_process_links = [
    ("https://stripe.com", "Stripe Checkout reference"),
    ("https://paypal.com", "PayPal Payment reference"),
]
"""

v5 = v5.replace('checkout_links = [', py_array + py_links + '\ncheckout_links = [')
v5 = v5.replace("('Checkouts',   len(checkouts),   'Checkout'),", "('Checkouts',   len(checkouts),   'Checkout'),\n    ('Payment Processes', len(payment_processes), 'PaymentProcess'),")
v5 = v5.replace("add_section(doc, 'checkouts',   'Checkouts',             'Checkout',   checkouts,   checkout_links)", "add_section(doc, 'checkouts',   'Checkouts',             'Checkout',   checkouts,   checkout_links)\nadd_section(doc, 'payment_processes', 'Payment Processes', 'PaymentProcess', payment_processes, payment_process_links)")

with open('generate_word_v6.py', 'w') as f:
    f.write(v5)
